import {
    DELETE_MOVIE,
    GET_MOVIES,
    UPDATE_LIKES,
    UPDATE_DISLIKES,
} from "./Action";

const initialState = [];

export default function AllMoviesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return action.payload;
            break;

        case DELETE_MOVIE:
            return state.filter((m) => m.id !== action.payload.id);
            break;

        case UPDATE_LIKES:
            return state.map((m) => {
                if (m.id === action.payload.id) {
                    return {...m, likes: action.payload.likes };
                }
                return m;
            });

        case UPDATE_DISLIKES:
            return state.map((m) => {
                if (m.id === action.payload.id) {
                    return {...m, dislikes: action.payload.dislikes };
                }
                return m;
            });

        default:
            return state;
            break;
    }
}