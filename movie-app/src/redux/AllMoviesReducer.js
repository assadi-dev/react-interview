import { DELETE_MOVIE, GET_MOVIES } from "./Action";

const initialState = [];

export default function AllMoviesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_MOVIES:
            return action.payload;
            break;

        case DELETE_MOVIE:
            return state.filter((m) => m.id !== action.payload.id);
            break;

        default:
            return state;
            break;
    }
}