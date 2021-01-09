import React from 'react';
import { Link } from 'react-router-dom';
import { movies } from '../../data/movies';
import classes from './Movies.module.css';

function Title(props) {
    return (
        <Link key={props.item.id} to={`/${props.item.id}`}>
            <div className={classes.item}>
                <img src={props.item.image} alt=""/>
                <div className={classes.title}>{props.item.title}</div>
            </div>
        </Link>
    );
}

const Movies = (props) => {
    
    let movieElements = movies.map(movie => <Title key={movie.id} item={movie} />);

    return (
        <div className={classes.item}>
            <div className={classes.movies}>
                {movieElements}
            </div>
        </div>
    );
}

export default Movies;