import { takeEvery } from 'redux-saga/effects'
import { fetchMoviesSaga } from './movies';
import * as actionTypesMovies from '../actions/movies/actionTypes';


export function* watchMovies() {
    yield takeEvery(actionTypesMovies.FETCH_MOVIES, fetchMoviesSaga);
}

