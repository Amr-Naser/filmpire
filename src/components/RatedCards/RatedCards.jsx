import React from 'react';
import { Box , Typography } from '@mui/material';
import { Container } from './styles';
import { Movie } from '..';

const RatedCards = ({title,data}) => {
  return (
    <Box>
        <Typography variant='h5' gutterBottom >{title}</Typography>
        <Container >
            {data?.results?.map((movie , i) => (
                <Movie key={movie.id} movie={movie} i={i} />
            ))}
        </Container>
    </Box>
  )
}

export default RatedCards;