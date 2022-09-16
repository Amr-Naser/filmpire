import React , { useState } from 'react';
import { 
  Box , 
  CircularProgress , 
  useMediaQuery , 
  Typography , 
  useTheme 
} from '@mui/material';
import { useSelector } from 'react-redux';
import { useGetMoviesQuery } from '../../services/TMDB';
import { MoviesList , Pagination , FeaturedMovie } from '..';


const Movies = () => {

  const theme = useTheme();
  const [page , setPage] = useState(1);
  const {genreIdOrCategoryName , searchQuery} = useSelector((state) => state.currentGenreOrCategory)
  const {data , error , isFetching} = useGetMoviesQuery({genreIdOrCategoryName , page , searchQuery});
  const lg = useMediaQuery(theme.breakpoints.only('lg'));
  const numberOfMovies = lg? 16 : 18 ;

  if(isFetching){
    return (
      <Box display='flex' justifyContent='center'>
        <CircularProgress size='8rem' />
      </Box>
    )
  }

  if(!data.results.length){
    return(
      <Box display='flex' alignItems='center' mt='20px' >
        <Typography variant='h4' >
          No movie that match that name
          <br />
          Please search for something else
        </Typography>
      </Box>
    )
  }

  if(error) return 'Error has happened .'


  return (
    <div>
      {/* Feature of first movie */}
      <FeaturedMovie movie={data.results[0]} />
      {/* The list of movies */}
      <MoviesList movies={data} numberOfMovies={numberOfMovies} />
      {/* Pagination of movies */}
      <Pagination currentPage={page} setPage={setPage} totalPages={data?.total_pages} />
    </div>
  )
}

export default Movies