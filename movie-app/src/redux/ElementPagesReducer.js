import { GET_NB_ELEMENTS, EDIT_NB_ELEMENTS } from "./ElementsPageAction";

const initialState = 4;

export default function ElementPagesReducer(state = initialState, action) {
    switch (action.type) {
        case GET_NB_ELEMENTS:
            return action.payload;
            break;

        case EDIT_NB_ELEMENTS:
            return action.payload;

        default:
            return state;
            break;
    }
}