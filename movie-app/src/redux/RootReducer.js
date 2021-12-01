import { combineReducers } from "redux";
import AllMoviesReducer from "./AllMoviesReducer";
import CategoriesReducer from "./CategoriesReducer";
import ElementPagesReducer from "./ElementPagesReducer";
const RootReducer = combineReducers({
    AllMoviesReducer,
    ElementPagesReducer,
    CategoriesReducer,
});

export default RootReducer;