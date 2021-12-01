import {
    ADD_CATEGORIES,
    DELETE_CATEGORIES,
    GET_CATEGORIES,
} from "./CategorieAction";

const initialState = [];
export default function CategoriesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_CATEGORIES:
            return action.payload;
            break;

        case ADD_CATEGORIES:
            return state.push(action.payload);
            break;

        case DELETE_CATEGORIES:
            return state.filter((m) => m !== action.payload);
            break;

        default:
            return state;
            break;
    }
}