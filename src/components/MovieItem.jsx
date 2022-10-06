import React from 'react';
import {Link} from "react-router-dom";

const MovieItem = ({movie}) => {
    const img_link = "https://image.tmdb.org/t/p/w500" + movie.poster_path;
    return (
        <Link to={`/movies/${movie.id}`} >
            <div className="movie-item">
                <img src={img_link} alt=""/>
                <h3>{movie.title}</h3>
            </div>
        </Link>
    );
};

export default MovieItem;