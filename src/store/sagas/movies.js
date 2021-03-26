import { put } from 'redux-saga/effects';
import axios from '../../fetchData/axios-records';
import * as actions from '../actions/index';
import {MOVIES} from '../../fakeData';

export function* fetchMoviesSaga({ params }) {

    yield put(actions.fetchMoviesStart());

    try {
        // *******************************************
        // NB -> per utilizzare la response del server
        // sostituire il setTimeout con -> const response = yield axios.get('/movie/popular');
        // *******************************************
        yield new Promise(resolve => setTimeout(resolve, 1000));

        yield put(actions.fetchMoviesSuccess(MOVIES.results));

    } catch (error) {
        yield put(actions.fetchMoviesFail(error));
    }

}