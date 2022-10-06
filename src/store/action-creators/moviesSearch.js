import {FETCH_MOVIES, FETCH_MOVIES_SUCCESS, FETCH_MOVIES_ERROR} from "../reducers/MoviesSearchReducer";
import axios from "axios";

export const fetchSearchMovies = (query) => {
    return async (dispatch) => {
        try {
            dispatch({type: FETCH_MOVIES});
            const response = await axios.get("https://api.themoviedb.org/3/search/movie?api_key=9122d3e99f5cf10f65b111a1dcd51b20&language=ru-RU&query=" + query + "&page=1");
            dispatch({type: FETCH_MOVIES_SUCCESS, payload: response.data.results})
        } catch (e) {
            dispatch({type: FETCH_MOVIES_ERROR, payload: "FETCHING MOVIES ERROR"})
        }
    }
}