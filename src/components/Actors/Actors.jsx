import React, { useState } from "react";
import { 
  Box , 
  Grid , 
  CircularProgress , 
  Button , 
  Typography 
} from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { ArrowBack } from "@mui/icons-material";
import {
  useGetActorsDetailsQuery,
  useGetMoviesByActorIdQuery,
} from "../../services/TMDB";
import { Image } from "./styles";
import { MoviesList, Pagination } from "..";

const Actors = () => {

  const [page, setPage] = useState(1);
  const navigate = useNavigate();
  const { id } = useParams();
  const { data, isFetching, error } = useGetActorsDetailsQuery(id);
  const { data: movies } = useGetMoviesByActorIdQuery({ id, page });

  if (isFetching) {
    return (
      <Box display="flex" justifyContent="center">
        <CircularProgress size="6rem" />
      </Box>
    );
  }

  if (error) {
    return (
      <Box display="flex" justifyContent="center">
        <Button startIcon={<ArrowBack />} onClick={() => navigate(-1)} color="primary">
          go Back
        </Button>
      </Box>
    );
  }

  return (
    <>
      <Grid container spacing={3}>
        {/* Actor's Image */}
        <Grid item lg={5} xl={4}>
          <Image
            src={`https://image.tmdb.org/t/p/w780/${data?.profile_path}`}
            alt={data?.name}
          />
        </Grid>
        {/* Actor's Biography */}
        <Grid
          item
          lg={7}
          xl={8}
          sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "column",
          }}
        >
          <Typography variant="h2" gutterBottom>
            {data?.name}
          </Typography>
          <Typography variant="h5" gutterBottom>
            Born: {new Date(data?.birthday).toDateString()}
          </Typography>
          <Typography variant="body2" align="justify" paragraph>
            {data?.biography || "Sorry, no biography yet..."}
          </Typography>
          <Box marginTop="2rem" display="flex" justifyContent="space-around">
            <Button
              variant="contained"
              color="primary"
              target="_blank"
              href={`https://www.imdb.com/name/${data?.imdb_id}`}
            >
              Imdb
            </Button>
            <Button
              startIcon={<ArrowBack />}
              color="primary"
              onClick={() => navigate(-1)}
            >
              Back
            </Button>
          </Box>
        </Grid>
      </Grid>
      {/* Actor's Movies */}
      <Box margin="2rem 0">
        <Typography variant="h2" gutterBottom align="center">
          Movies
        </Typography>
        {movies && <MoviesList movies={movies} numberOfMovies={12} />}
      </Box>
      {/* Pagination of Movies */}
      <Pagination
        currentPage={page}
        setPage={setPage}
        totalPages={movies?.total_pages}
      />
    </>
  );
};

export default Actors;
