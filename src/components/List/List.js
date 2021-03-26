import axios from '../../fetchData/axios-records';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import Card from '../Card/Card';
import classes from './List.module.css';

const List = props => {
    const { data } = props;
    return (
        <ul className={classes.list}>
            {
                data.map(record => <li key={record.id}><Card item={record}/></li>)
            }
        </ul>
    )
}

export default withErrorHandler(List, axios);