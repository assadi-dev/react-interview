import { movies$ } from "../movies.js";
export const GET_MOVIES = "GET_MOVIES";
export const CURRENT_MOVIE = "CURRENT_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";
export const GET_CATEGORY = "GET_CATEGORY";

export const get_movies = () => {
    return async(dispatch) => {
        try {
            const data = await movies$;
            dispatch({ type: GET_MOVIES, payload: data });
        } catch (error) {
            console.log(error);
        }
    };
};

export const current_movie = (id) => {
    return async(dispatch) => {
        try {
            const data = await movies$;

            dispatch({
                type: CURRENT_MOVIE,
                payload: data.filter((m) => m.id === id)[0],
            });
        } catch (error) {
            console.log(error);
        }
    };
};

export const delete_movie = (id) => {
    return async(dispatch) => {
        try {
            const data = await movies$;
            dispatch({
                type: DELETE_MOVIE,
                payload: data.filter((m) => m.id === id)[0],
            });
        } catch (error) {
            console.log(error);
        }
    };
};