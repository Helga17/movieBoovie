import React, { useState, useEffect } from 'react';
import classes from './Gengre.module.css';
import { Link } from 'react-router-dom';
import { useParams } from "react-router-dom";
import axios from 'axios';

const Genre = (props) => {
    let { id } = useParams();

    const [genre, setGenre] = useState({});

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/genres/' + id)
            .then(result => {
                const genreData = result.data;

                setGenre(genreData);
            });
    }, [id]);

    let movieElements = genre.movies ? genre.movies.map(movie => {
        return (
            <Link key={movie.id} to={`/movies/${movie.id}`} className={classes.link}>
                <div className={classes.item}>
                    <img src={movie.image} alt="" />
                    <div className={classes.title}>{movie.title}</div>
                </div>
            </Link>
        )
    }) : [];

    return (
        <div>
            <h2>Жанр</h2>
            <div className={classes.item}>
                <div className={classes.movies}>
                    {movieElements}
                </div>
            </div>
        </div>
    );
}

export default Genre;