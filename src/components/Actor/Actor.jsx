import React, { useState, useEffect } from 'react';
import classes from './Actor.module.css';
import { useParams, Link } from "react-router-dom";
import axios from 'axios';

const Actor = (props) => {
    let { id } = useParams();

    const [actor, setActor] = useState({});
    

    useEffect(() => {
        axios.get('http://127.0.0.1:8000/api/actors/' + id) 
        .then(result => {
            const actorData = result.data;

            setActor(actorData);
        });
    }, [id]);

    console.log(actor, 'actor');

    const imageLink = `http://127.0.0.1:8000/${actor.image}`;

    let movieElements = actor.movies ? actor.movies.map(movie => {
        return (
            <Link key={movie.id} to={`/movies/${movie.id}`} className={classes.link}>
                <img src={movie.image} alt="" />
                <div className={classes.title}>{movie.title}</div>
            </Link>
        )}
    ) : [];

    return (
        <div>
            <div className={classes.actor}>
                <span key={actor.id}><img src={imageLink} alt={'actor.first_name'} /></span>
                <div className={classes.info}>
                    <div className={classes.name}>{actor.first_name} {actor.last_name}</div> 
                    <div className={classes.born}>Народився(-лася): {actor.birthday}</div>
                </div>
            </div>
            <h2>Фільмографія</h2>

            <div className={classes.item}>
                <div className={classes.movies}>
                    {movieElements}
                </div>
            </div>
        </div>

    );
}

export default Actor;