import { GET_DATA_MOVIES, CURRENT_DATA_MOVIES } from "./Action";

const initialState = { collections: [], current: [] };

export default function InfoMovieReducer(state = initialState, action) {
    switch (action.type) {
        case GET_DATA_MOVIES:
            return {...state, collections: action.payload };
            break;
        case CURRENT_DATA_MOVIES:
            return {...state, current: action.payload };
            break;

        default:
            return state;
    }
}