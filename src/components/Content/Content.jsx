import React, { useState, useEffect } from 'react';
import Media from './Media/Media';
import classes from './Content.module.css';
import Populars from './Populars/Populars';
import axios from 'axios';
import { Link } from 'react-router-dom';


const Content = (props) => {

    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/movies?limit=3', {params: {per_page: 3, page: 1}})
            .then(result => {
                const moviesData = result.data.data;

                setMovies(moviesData);
            });
    }, []);

    let contentElements = movies.map(movie => {
        return (
            <div key={movie.id} className={classes.item}>
                <Link to={`movies/${movie.id}`}>
                    <img src={movie.image} alt={""} />
                    <div className={classes.text}>{movie.title}</div>
                </Link>
            </div>
        );
    });

    return (
        <div>
            <div className={classes.card}>
                {movies.length > 0 && contentElements}
            </div>
            <Populars />
            <Media />
        </div>

    );
}

export default Content;