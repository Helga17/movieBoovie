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
            <div className={classes.actor}>
                <span key={actor.id}><img src={actor.image} alt="" /></span>
                <div className={classes.info}>
                    <div className={classes.name}>{actor.actor}</div> 
                    <div className={classes.born}>Народився(-лася): {actor.born}</div>
                    <div className={classes.profession}>Актор(-ка)  Озвучувач(-ка)</div>
                </div>
            </div>
            <h2>Фільмографія</h2>
            <div className={classes.movie}>
                {movieElements} 
            </div>
           
        </div>

    );
}

export default Actor;