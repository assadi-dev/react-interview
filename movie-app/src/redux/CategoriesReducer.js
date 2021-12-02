import { ADD_CATEGORIES, DELETE_CATEGORIES } from "./CategorieAction";

const initialState = [];
export default function CategoriesReducer(state = initialState, action) {
    switch (action.type) {
        case ADD_CATEGORIES:
            return [...state, action.payload];
            break;

        case DELETE_CATEGORIES:
            return state.filter((m) => m !== action.payload);
            break;

        default:
            return state;
            break;
    }
}