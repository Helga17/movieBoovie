import React, { useState, useEffect } from 'react';
import classes from './Movie.module.css';
import Overview from '../../Overview/Overview';
import { Link, useParams } from "react-router-dom";
import axios from 'axios';

const Movie = (props) => {
    let { id } = useParams();

    const [movie, setMovie] = useState({});

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/movies/' + id)
            .then(result => {
                const movieData = result.data;

                setMovie(movieData);
            });
    }, [id]);

    const overviewElement = <Overview item={movie} />

    let momentElements = movie.moments ? movie.moments.map(moment => {
        const imageLink = `http://127.0.0.1:8000/${moment.image}`;
        return (
            <div key={moment.id} className={classes.moment}><img src={imageLink} alt={""} /></div>
        );
    }) : [];

    let actorElements = movie.actors ? movie.actors.map(actor => {
        const imageLink = `http://127.0.0.1:8000/${actor.image}`;

        return (
            <div key={actor.id} className={classes.actor}><img src={imageLink} alt={actor.first_name} />
                <p><Link className={classes.link} to={`/actors/${actor.id}`}>{actor.first_name} {actor.last_name}</Link></p>
                <p className={classes.role}>{actor.role_title}</p>
                </div>
        );
    }) : [];

    let directorElements = movie.directors ? movie.directors.map(director => {
        return (
            <span key={director.id}><Link className={classes.linkDirector} to={`/directors/${director.id}`}>{director.first_name} {director.last_name}</Link></span>
        );
    }) : [];

    return (movie &&
        <div className={classes.movies}>
            <div className={classes.overview}>
                <div className={classes.poster}>
                    <img src={movie.image} alt="" />
                </div>
                {overviewElement}
            </div>
            <div className={classes.subtitle}>Моменти кіно</div>
            <div className={classes.moments}>
                {momentElements}
            </div>

            <div className={classes.subtitle}>Акторський склад</div>
            <div className={classes.actors}>
                {actorElements}
            </div>

            <div className={classes.subtitle}>
                <span>Режисер:</span>
                <span className={classes.filmmaker}>
                    {directorElements}
                </span>
            </div>
        </div>
    );
}

export default Movie;