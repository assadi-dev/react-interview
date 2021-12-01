export const GET_CATEGORIES = "GET_CATEGORIES";
export const ADD_CATEGORIES = "ADD_CATEGORIES";
export const DELETE_CATEGORIES = "DELETE_CATEGORIES";

export const get_categories = (movies) => {
  return async (dispatch) => {
    try {
      const data = [
        ...new Set(
          movies.map((m) => {
            return m.category;
          })
        ),
      ];
      dispatch({ type: GET_CATEGORIES, payload: data });
    } catch (error) {
      console.log(error);
    }
  };
};

export const delete_categories = (name) => {
  return async (dispatch) => {
    try {
      dispatch({ type: DELETE_CATEGORIES, payload: name });
    } catch (error) {
      console.log(error);
    }
  };
};
