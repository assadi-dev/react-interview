export const GET_NB_ELEMENTS = "GET_NB_ELEMENTS";
export const EDIT_NB_ELEMENTS = "EDIT_NB_ELEMENTS";

export const edit_elements_pages = (nb) => {
    return async(dispatch) => {
        dispatch({ type: EDIT_NB_ELEMENTS, payload: nb });
    };
};