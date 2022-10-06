import React from 'react';
import {useState, useEffect} from "react";
import MovieItem from "./MovieItem";
import {useDispatch, useSelector} from "react-redux";
import { fetchMovies } from '../store/action-creators/movies';

const MovieList = () => {
    const {movies, loading, error} = useSelector(state => state.movies);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchMovies())
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>ERROR</div>
    }

    return (
        <div>
            <h1>Popular films</h1>
            <div className="movie-list">
                {
                    movies.map((movie) =>
                        <MovieItem key={movie.id} movie={movie} />
                    )
                }
            </div>
        </div>
    );
};

export default MovieList;