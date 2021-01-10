import React from 'react';
import classes from './Actor.module.css';
import { actors as actorsData } from '../../data/actors';
import { useParams } from "react-router-dom";
import { movies as moviesData } from '../../data/movies';

const Actor = (props) => {
    let { id } = useParams();

    const actor = actorsData.find(actor => actor.id === parseInt(id));

    const movies = moviesData.filter(movie => movie.actorIds.includes(actor.id));

    const movieElements = movies.map(movie => (<div key={movie.id}><img src={movie.image} alt="" />
        <div className={classes.title}>{movie.title}</div></div>));

    return (
        <div>
            <div key={actor.id}><img src={actor.image} alt="" />
                <p className={classes}>{actor.actor}</p>
            </div>
            {movieElements}
        </div>
    );
}

export default Actor;