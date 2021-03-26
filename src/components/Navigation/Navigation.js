import { Link } from 'react-router-dom';
import classes from './Navigation.module.css';
const Navigation = () => {
     
    return (
        <nav>
            <ul className={classes.navigation}>
                <li className={classes.navigationItem}><Link to="/">All Movies</Link></li>
            </ul>
        </nav>
    )
}

export default Navigation;