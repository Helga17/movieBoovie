import React from 'react';
import classes from './Gengre.module.css';
import {genres as genresData} from '../../data/genres';
import {movies as moviesData} from '../../data/movies';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";

const Genre = (props) => {
    let { title } = useParams();

    const genre = genresData.find(genre => genre.title === title);

    const movies = moviesData.filter(movie => movie.genreIds.includes(genre.id));

    const movieElements = movies.map(movie => {
        return <Link key={movie.id} to={`/${movie.id}`}>
            <div className={classes.item}>
                <img src={movie.image} alt=""/>
                <div className={classes.title}>{movie.title}</div>
            </div>
        </Link>
    })

    return (
        <div>
            {movieElements}
        </div>
    );
}

export default Genre;