const defaultState = {
    movies: [],
    loading: false,
    error: null
}

export const FETCH_MOVIES = "FETCH_MOVIES";
export const FETCH_MOVIES_SUCCESS = "FETCH_MOVIES_SUCCESS";
export const FETCH_MOVIES_ERROR = "FETCH_MOVIES_ERROR";

export const moviesReducer = (state = defaultState, action) => {
    switch(action.type){
        case FETCH_MOVIES:
            return {loading: true, movies: []}
        case FETCH_MOVIES_SUCCESS:
            return {loading: false, error: null, movies: action.payload}
        case FETCH_MOVIES_ERROR:
            return {loading: false, error: action.payload, movies: []}
        default:
            return state;
    }
}

export const fetchMoviesAction = () => ({type: FETCH_MOVIES});