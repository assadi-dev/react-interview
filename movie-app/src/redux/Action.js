import { movies$ } from "../movies.js";
import { dataMovies } from "../component/api/moviesData.js";
export const GET_MOVIES = "GET_MOVIES";
export const CURRENT_MOVIE = "CURRENT_MOVIE";
export const DELETE_MOVIE = "DELETE_MOVIE";
export const GET_CATEGORY = "GET_CATEGORY";
export const UPDATE_LIKES = "UPDATE_LIKES";
export const UPDATE_DISLIKES = "UPDATE_DISLIKES";
export const GET_DATA_MOVIES = "GET_DATA_MOVIES";
export const CURRENT_DATA_MOVIES = "CURRENT_DATA_MOVIES";

export const get_movies = () => {
    return async(dispatch) => {
        try {
            const data = await movies$;
            const movies = data;
            dispatch({ type: GET_MOVIES, payload: movies });
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

export const update_likes = (data) => {
    return async(dispatch) => {
        try {
            dispatch({ type: UPDATE_LIKES, payload: data });
        } catch (error) {}
    };
};

export const update_dislikes = (data) => {
    return async(dispatch) => {
        try {
            dispatch({ type: UPDATE_DISLIKES, payload: data });
        } catch (error) {}
    };
};

export const get_dataMovie = () => {
    return async(dispatch) => {
        try {
            const data = await dataMovies;
            dispatch({ type: GET_DATA_MOVIES, payload: data });
        } catch (error) {
            console.log(error);
        }
    };
};

export const current_dataMovie = (title) => {
    return async(dispatch) => {
        try {
            const data = await dataMovies;
            const current = data.filter((m) => m.title === title);
            dispatch({ type: CURRENT_DATA_MOVIES, payload: current[0] });
        } catch (error) {
            console.log(error);
        }
    };
};