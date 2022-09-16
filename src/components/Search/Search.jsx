import React , { useState } from 'react';
import { InputAdornment } from '@mui/material';
import  SearchIcon  from '@mui/icons-material/Search';
import { useDispatch } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { SearchContainer , SearchInput} from './styles';
import { searchMovie } from '../../features/currentGenreOrCategory';

const Search = () => {
    const [query , setQuery] = useState('');
    const dispatch = useDispatch();
    const location = useLocation();

    const handleKeyPress = (event) => {
        if(event.key === 'Enter'){
            dispatch(searchMovie(query))
        }
    }

    if(location.pathname !== '/') return null ;


  return (
    <SearchContainer>
        <SearchInput 
            onKeyPress={handleKeyPress}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            variant='standard'
            InputProps={{
                startAdornment: (
                    <InputAdornment position='start'>
                        <SearchIcon />
                    </InputAdornment>
                )
            }}
        />
    </SearchContainer>
  )
}

export default Search;