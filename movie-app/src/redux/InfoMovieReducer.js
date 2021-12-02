import { GET_DATA_MOVIES } from "./Action";

const initialState = [];

export default function InfoMovieReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DATA_MOVIES:
            return action.payload;
            break;

        default:
            return state;
    }
}