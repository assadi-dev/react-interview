export const ADD_CATEGORIES = "ADD_CATEGORIES";
export const DELETE_CATEGORIES = "DELETE_CATEGORIES";

export const add_categories = (data) => {
    return async(dispatch) => {
        try {
            dispatch({ type: ADD_CATEGORIES, payload: data });
        } catch (error) {
            console.log(error);
        }
    };
};

export const delete_categories = (name) => {
    return async(dispatch) => {
        try {
            dispatch({ type: DELETE_CATEGORIES, payload: name });
        } catch (error) {
            console.log(error);
        }
    };
};