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
        console.log('found movie:', movie);
        let findMovie = JSON.stringify(movie);

        // const sortedMovies = findMovie.push(movie);
        
        // setMovies(sortedMovies);

        localStorage.setItem('Movie', findMovie);
        console.log(findMovie)
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