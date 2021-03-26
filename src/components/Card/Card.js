import classes from './Card.module.css';
const IMAGE_URL = 'http://image.tmdb.org/t/p/original';

const Card = props => {
    const { poster_path, title, vote_average, popularity, overview } = props.item;

    return (
        <div className={classes.card}>
            <div className={classes.image}>
                <img src={IMAGE_URL + poster_path} alt={title} />
            </div>
            <div className={classes.content}>
                <h3>{title}</h3>
                <div>
                    <span>Vote: {vote_average}</span>
                    <span>Popularity: {popularity.toFixed(2)}</span>
                </div>
                <p>{overview}</p>
            </div>
        </div>
    )
}

export default Card;