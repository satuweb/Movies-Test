import { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import axios from '../fetchData/axios-records';
import withErrorHandler from '../hoc/withErrorHandler/withErrorHandler';
import * as actions from '../store/actions/index';
import List from '../components/List/List';
import Spinner from '../components/UI/Spinner/Spinner';
import Sorter from '../components/Sorter/Sorter';
import { sortObjByParam } from '../utils';

const configSort = {
    options: [{
        value: 'release_date',
        displayValue: 'release'
    }, {
        value: 'vote_average',
        displayValue: 'vote'
    }]
}

const AllMeetupsPage = props => {
    const { onFetchMovies, loading, movies } = props;
    const [sortBy, setSortBy] = useState(configSort.options[0].value); // default first el

    const sortableMovies = sortObjByParam(movies, sortBy, 'DESC');

    const sortHandler = (event) => {
        setSortBy(event.target.value);
    }
    useEffect(() => {
        onFetchMovies();
    }, [onFetchMovies]);

    if (loading) {
        return <Spinner />
    }
    return <section>
        <h1>All Movies</h1>
        <Sorter elementSort={configSort} onSort={sortHandler} />
        <List data={sortableMovies} />
    </section>
}
const mapStateToProps = state => {
    return {
        movies: state.moviesReducer.movies,
        loading: state.moviesReducer.loading
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchMovies: () => dispatch(actions.fetchMovies())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(withErrorHandler(AllMeetupsPage, axios));
