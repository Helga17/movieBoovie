import React, { useState, useEffect } from 'react';
import classes from './Populars.module.css';
import Slider from './../../Slider';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

// отображение популярных фильмов на главной странице Content.jsx

const Populars = (props) => {

    const [popularMovies, setPopularMovies] = useState([]);

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/movies?limit=7')
            .then(result => {
                const moviesData = result.data;

                setPopularMovies(moviesData);
            });
    }, []);

    return (
        <div>
            <div className={classes.title}>
                <h3>У тренді</h3>
                <NavLink to="/allmovies" className={classes.allMovies}>Усі фільми</NavLink>
            </div>
            { popularMovies.length > 0 && <Slider items={popularMovies}/> }
        </div>
    );
}

export default Populars;