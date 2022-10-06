import React, {useState} from 'react';
import {useEffect} from "react";
import {useParams, useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {fetchMovie} from "../store/action-creators/movie";

const MovieDetails = () => {
    const {movie, loading, error} = useSelector(state => state.movie);
    const dispatch = useDispatch();
    const params = useParams("id");
    const navigate = useNavigate();

    useEffect(() => {
        dispatch(fetchMovie(params.id))
    }, [params.id])

    if (loading) {
        return <div>Loading...</div>
    }
    if (error) {
        return <div>ERROR</div>
    }

    const goBack = () => {
        navigate("/movies");
    }

    return (
        <div className="flex-column">
            <div className="flex-row">
                <div>
                    <img src={"https://image.tmdb.org/t/p/w500" + movie.poster_path} alt=""/>
                </div>
                <div>
                    <h2>{movie.title}</h2>
                    <p>Tagline: {movie.tagline}</p>
                    <p>Release Date: {movie.release_date}</p>
                    <p>Genres: {movie.genres.map((genre) => <li key={genre.id}>{genre.name}</li>)}</p>
                    <p>Rating: {movie.vote_average}</p>
                </div>
            </div>
            <div>
                <p>Описание: {movie.overview}</p>
            </div>
            <button onClick={goBack}>Назад</button>
        </div>
    );
};

export default MovieDetails;