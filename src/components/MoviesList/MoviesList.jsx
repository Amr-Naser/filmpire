import React from 'react';
import { Grid } from '@mui/material';
import { StyledGrid } from './styles';
import {Movie} from '..';

const MoviesList = ({movies , numberOfMovies}) => {
  return (
    <StyledGrid container >
        {movies.results.map((movie , i) => (
            <Movie key={i} movie={movie} i={i} />
        )).slice(0,numberOfMovies)}
    </StyledGrid>
  )
}

export default MoviesList;