import Header from '../../components/Header/Header';
import classes from './Layout.module.css';

const Layout = props => {
    return (
        <>
            <Header />
            <main className={classes.main}>
                {props.children}
            </main>
        </>
    )
}

export default Layout;