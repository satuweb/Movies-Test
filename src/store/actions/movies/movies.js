import * as actionTypes from './actionTypes';

export const fetchMoviesStart = () => {
    return {
        type: actionTypes.FETCH_MOVIES_START
    }
}

export const fetchMoviesSuccess = (movies) => {
    return {
        type: actionTypes.FETCH_MOVIES_SUCCESS,
        movies: movies
    }
}


export const fetchMoviesFail = (error) => {
    return {
        type: actionTypes.FETCH_MOVIES_FAIL,
        error: error
    }
}

export const fetchMovies = (params) => {
    return {
        type: actionTypes.FETCH_MOVIES,
        params: params
    }
}