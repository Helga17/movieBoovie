import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './Movies.module.css';
import axios from 'axios';

function Title(props) {
    return (
        <Link className={classes.link} key={props.item.id} to={`movies/${props.item.id}`}>
            <div className={classes.item}>

                <div className={classes.item}>
                    <img src={props.item.image} alt="" />
                    <div className={classes.title}>{props.item.title}</div>

                </div>
            </div>
        </Link>
    );
}

const Movies = (props) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/movies')
            .then(result => {
                const moviesData = result.data;

                setMovies(moviesData);
            });
    }, []);

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