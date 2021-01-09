import React from 'react';
import classes from './Movie.module.css';
import Overview from '../../Overview/Overview';
import { movies } from "../../../data/movies";
import { useParams } from "react-router-dom";

const Movie = (props) => {
    let { id } = useParams();
    let movie = movies.find(movie => movie.id === parseInt(id));
    const overviewElement = <Overview item={movie} />

    let momentElements = movie.moments ? movie.moments.map(moment => (<div key={moment.id} className={classes.moment}><img src={moment.image} alt={""} /></div>)) : null;

    let actorElements = movie.actors ? movie.actors.map(actor => (<div key={actor.id} className={classes.actor}><img src={actor.image} alt={""} />
        <p className={classes}>{actor.actor}</p><p className={classes}>{actor.role}</p></div>)) : null;

    return (movie &&
        <div className={classes.movies}>
            <div className={classes.overview}>
                <div className={classes.poster}>
                    <img src={movie.image} alt='frida' />
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
                    <span>Джулі Теймор</span>
                </span>
            </div>
        </div>
    );
}

export default Movie;