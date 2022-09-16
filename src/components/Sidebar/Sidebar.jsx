import React , { useEffect } from 'react';
import { Divider ,
         List ,
         ListItemText ,
         ListSubheader ,
         ListItemIcon ,
         ListItemButton,
         Box ,
         CircularProgress
        } from '@mui/material';

import {useTheme} from '@mui/material'
import { LinkContainer , StyledLink , GenreImg } from './styles';
import { useGetGenresQuery } from '../../services/TMDB';
import genreIcons from '../../assets/genres';
import { useDispatch , useSelector } from 'react-redux';
import { selectGenreOrCategory } from '../../features/currentGenreOrCategory';




const BlueLogo =
	'https://fontmeme.com/permalink/210930/8531c658a743debe1e1aa1a2fc82006e.png';
const RedLogo =
	'https://fontmeme.com/permalink/210930/6854ae5c7f76597cf8680e48a2c8a50a.png';

  const categories = [
    {label:'Popular' , value:'popular'},
    {label:'Top Rated' , value:'top_rated'},
    {label:'Upcoming' , value:'upcoming'},
  ];



  

const Sidebar = ({setMobileOpen}) => {
  const theme = useTheme();
  const {data , isFetching} = useGetGenresQuery();
  const dispatch = useDispatch();
  const { genreIdOrCategoryName } = useSelector((state) => state.currentGenreOrCategory);


  useEffect(() => {
		setMobileOpen(false);
	}, [genreIdOrCategoryName, setMobileOpen]);

  return (
    <>
      <LinkContainer to='/'>
        <img 
          src={theme.palette.mode === 'light' ? BlueLogo : RedLogo}
          alt='filmpire logo'
        />
      </LinkContainer>
      <Divider />
      <List >
        <ListSubheader>Categories</ListSubheader>
        {categories.map(({label , value}) => (
            <StyledLink key={value} to='/'>
              <ListItemButton onClick={() => dispatch(selectGenreOrCategory(value))}>
                <ListItemIcon>
                  <GenreImg src={genreIcons[label.toLowerCase()]} />
                </ListItemIcon>
                <ListItemText primary={label} />
              </ListItemButton>
            </StyledLink>
          ))}
      </List>
      <Divider />
      <List >
        <ListSubheader>Genres</ListSubheader>
        { isFetching ? (
          <Box display='flex' justifyContent='center'>
          <CircularProgress />
        </Box>
        ) : data.genres.map(({name , id}) => (
            <StyledLink key={name} to='/'>
              <ListItemButton onClick={() => dispatch(selectGenreOrCategory(id))}>
                <ListItemIcon>
                  <GenreImg src={genreIcons[name.toLowerCase()]} />
                </ListItemIcon>
                <ListItemText primary={name} />
              </ListItemButton>
            </StyledLink>
          ))}
      </List>
    </>
  )
}

export default Sidebar;