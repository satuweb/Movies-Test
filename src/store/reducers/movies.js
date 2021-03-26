import * as actionTypes from '../actions/movies/actionTypes';

const initState = {
    movies: [],
    loading: false
}
export const moviesReducer = (state = initState, action) => {
    switch (action.type) {

        case actionTypes.FETCH_MOVIES_START:
            return {
                ...state,
                loading: true
            }
        case actionTypes.FETCH_MOVIES_SUCCESS:
            return {
                ...state,
                movies: action.movies,
                loading: false
            }
        case actionTypes.FETCH_MOVIES_FAIL:
            return {
                ...state,
                loading: false
            }

        default:
            return state
    }
}