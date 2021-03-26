import Navigation from '../Navigation/Navigation';
import classes from './Header.module.css';

const Header = () => {
    return <header className={classes.header}>
        <h1 className={classes.logo}>My Movies</h1>
        <Navigation />
    </header>
}

export default Header;