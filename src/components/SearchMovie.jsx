import React, {useState} from 'react';
import {useEffect} from "react";
import {useParams} from "react-router-dom";
import MovieItem from "./MovieItem";
import {useDispatch, useSelector} from "react-redux";
import { fetchSearchMovies } from '../store/action-creators/moviesSearch';

const SearchMovie = () => {
    const {movies, loading, error} = useSelector(state => state.movies);
    const dispatch = useDispatch();
    const params = useParams("query");

    useEffect(() => {
        dispatch(fetchSearchMovies(params.query))
    }, [params.query])

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>ERROR</div>
    }

    return (
        <div className="movie-list">
            {
                movies.map((m) =>
                <MovieItem key={m.id} movie={m}/>)
            }
        </div>
    );
};

export default SearchMovie;