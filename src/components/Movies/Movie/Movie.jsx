import React from 'react';
import classes from './Movie.module.css';
import Overview from '../../Overview/Overview';
import { movies } from '../../../data/movies';
import { actors as actorsData } from '../../../data/actors';
import { Link, useParams } from "react-router-dom";

const Movie = (props) => {
    let { id } = useParams();
    let movie = movies.find(movie => movie.id === parseInt(id));
    const overviewElement = <Overview item={movie} />

    const actors = actorsData.filter(actor => movie.actorIds.includes(actor.id));

    let actorElements = actors.map(actor => {
        return <div key={actor.id} className={classes.actor}><img src={actor.image} alt={""} />
            <p className={classes}><Link to={`/actors/${actor.id}`}>{actor.actor}</Link></p>
            <p className={classes}>{actor.role}</p></div>
    });

    let momentElements = movie.moments ? movie.moments.map(moment => (<div key={moment.id} className={classes.moment}><img src={moment.image} alt={""} /></div>)) : null;

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
                    {/* <span>Джулі Теймор</span> */}
                </span>
            </div>
        </div>
    );
}

export default Movie;