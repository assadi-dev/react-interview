import { combineReducers } from "redux";
import AllMoviesReducer from "./AllMoviesReducer";
import CategoriesReducer from "./CategoriesReducer";
const RootReducer = combineReducers({
    AllMoviesReducer,
    CategoriesReducer,
});

export default RootReducer;