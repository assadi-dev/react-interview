import { combineReducers } from "redux";
import AllMoviesReducer from "./AllMoviesReducer";
import CategoriesReducer from "./CategoriesReducer";
import ElementPagesReducer from "./ElementPagesReducer";
import InfoMovieReducer from "./InfoMovieReducer";
const RootReducer = combineReducers({
    AllMoviesReducer,
    ElementPagesReducer,
    CategoriesReducer,
    InfoMovieReducer,
});

export default RootReducer;