import React, { useState } from 'react';
import classes from './Overview.module.css';
import { genres as genresData } from '../../data/genres';
import { Link, useParams } from 'react-router-dom';
import { movies as moviesData } from '../../data/movies';

function Overview(props) {
    const genres = genresData.filter(genre => props.item.genreIds.includes(genre.id));

    const genreElements = genres.map(genre => {
        return <span key={genre.id}><Link to={`/genres/${genre.title}`}>{genre.displayedTitle}</Link></span>
    })

    let { id } = useParams();
    const [movies, setMovies] = useState(moviesData);

    function addMovie () {
        let movie = movies.find(movie => movie.id === parseInt(id));
        let watchlist = JSON.parse(localStorage.getItem('movies'));

        if(watchlist === null){
            watchlist = [];
        }
        watchlist.push(movie);
        
        setMovies(watchlist);

        localStorage.setItem('movies', JSON.stringify(watchlist));
    }

    return (
        <div className={classes.info}>
            <h2>{props.item.title}</h2><span>{props.item.rating}</span>
            <p >{props.item.originalTitle}</p>
            <p>{props.item.outline} {genreElements} | {props.item.year}</p>
            <div className={classes.description}>{props.item.description}</div>

            <div className={classes.btn} onClick={addMovie}>
                Додати у список
            </div>
        </div>
    );
}

export default Overview;