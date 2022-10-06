import {applyMiddleware, combineReducers, legacy_createStore as createStore} from "redux";
import { movieReducer } from "./reducers/MovieReducer";
import { moviesReducer } from "./reducers/MoviesReducer";
import { moviesSearchReducer } from "./reducers/MoviesSearchReducer";
import {composeWithDevTools} from "redux-devtools-extension";
import thunk from "redux-thunk";


const rootReducer = combineReducers({
    movie: movieReducer,
    movies: moviesReducer,
    moviesSearch: moviesSearchReducer
})

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));