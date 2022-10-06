import {FETCH_MOVIE, FETCH_MOVIE_SUCCESS, FETCH_MOVIE_ERROR} from "../reducers/MovieReducer";
import axios from "axios";

export const fetchMovie = (id) => {
    return async (dispatch) => {
        try {
            dispatch({type: FETCH_MOVIE});
            const response = await axios.get("https://api.themoviedb.org/3/movie/" + id + "?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU");
            dispatch({type: FETCH_MOVIE_SUCCESS, payload: response.data.results})
        } catch (e) {
            dispatch({type: FETCH_MOVIE_ERROR, payload: "FETCHING MOVIE ERROR"})
        }
    }
}