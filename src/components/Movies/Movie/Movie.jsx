import React from 'react';
import classes from './Movie.module.css';
import Overview from '../../Overview/Overview';
import { movies } from "../../../data/movies";
import {
    useParams
} from "react-router-dom";

function Moment(props) {
    return (
        <div className={classes.moment}>
            <img src={props.image} alt={''}/>
        </div>
    );
}

function Actor(props) {
    return (
        <div className={classes.actor}>
            <img src={props.image} alt={""}/>
            <p className={classes}>{props.name}</p>
            <p className={classes}>{props.role}</p>
        </div>
    );
}

const Movie = (props) => {
    let { id } = useParams();
    let movie = movies.find(movie => movie.id === parseInt(id));
    const owerviewElement = <Overview item={movie} />

    let momentElements = movie.moments ? movie.moments.map(moment => <Moment key={moment.id} image={moment.image} />) : null;

    let actorElements = movie.actors ? movie.actors.map(actor => <Actor key={actor.id} image={actor.image} name={actor.actor} role={actor.role} />) : null;

    return ( movie &&
        <div className={classes.movies}>
            <div className={classes.overview}>
                <div className={classes.poster}>
                    <img src={movie.image} alt='frida' />
                </div>
                {owerviewElement}
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