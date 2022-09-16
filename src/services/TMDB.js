import { createApi , fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const tmdbApiKey = process.env.REACT_APP_TMDB_KEY;
const page = 1 ;
// /movie/{movie_id}?api_key=<<api_key>>&language=en-US
export const tmdbApi =  createApi({
    reducerPath: 'tmbdApi',
    baseQuery: fetchBaseQuery({baseUrl:'https://api.themoviedb.org/3'}),
    endpoints:(builder) => ({
        //* Get Genres
        getGenres: builder.query({
            query:() => `/genre/movie/list?api_key=${tmdbApiKey}`
        }),

        //* Get Movies By Type
        getMovies: builder.query({
            query:({genreIdOrCategoryName , page , searchQuery}) => {

                //* Get Movies By Search
                if(searchQuery){
                    return `/search/movie?query=${searchQuery}&page=${page}&api_key=${tmdbApiKey}`
                }
                
                //* Get Movies By Category
                if(genreIdOrCategoryName && typeof genreIdOrCategoryName === 'string'){
                    return `/movie/${genreIdOrCategoryName}?page=${page}&api_key=${tmdbApiKey}`
                };

                //* Get Movies By Genre
                if(genreIdOrCategoryName && typeof genreIdOrCategoryName === 'number'){
                    return `discover/movie?with_genres=${genreIdOrCategoryName}&page=${page}&api_key=${tmdbApiKey}`
                };
               
                return `movie/popular?page=${page}&api_key=${tmdbApiKey}`;
            }
        }),

        //Get Movie
        getMovie: builder.query({
            query: (id) =>  `/movie/${id}?append_to_response=videos,credits&api_key=${tmdbApiKey}`
            
        }),

        //Get User Specific List
        getList: builder.query({
            query: ({listName , accountId , sessionId , page}) => `/account/${accountId}/${listName}?api_key=${tmdbApiKey}&session_id=${sessionId}&page=${page}`
        }),

        getRecommendations: builder.query({
            query: ({movie_id , list}) => `/movie/${movie_id}/${list}?api_key=${tmdbApiKey}`
        }),

        //Get Actor's Details
        getActorsDetails: builder.query({
            query: (id) => `person/${id}?api_key=${tmdbApiKey}`
        }),

        //Get Actor's Movies
        getMoviesByActorId:builder.query({
            query: ({id,page}) => `/discover/movie?with_cast=${id}&page=${page}&api_key=${tmdbApiKey}`
        })
    })
})

export const { 
    useGetGenresQuery , 
    useGetMoviesQuery , 
    useGetMovieQuery , 
    useGetListQuery,
    useGetRecommendationsQuery , 
    useGetActorsDetailsQuery , 
    useGetMoviesByActorIdQuery
} = tmdbApi ;