import React from 'react';
import classes from './Overview.module.css';
import {genres as genresData} from '../../data/genres';
import { Link } from 'react-router-dom';

function Overview(props) {
    const genres = genresData.filter(genre => props.item.genreIds.includes(genre.id));

    const genreElements = genres.map(genre => {
        return <span key={genre.id}><Link to={`/genres/${genre.title}`}>{genre.displayedTitle}</Link></span>
    })

    return (
        <div className={classes.info}>
            <h2>{props.item.title}</h2><span>{props.item.rating}</span>
            <p>{props.item.originalTitle}</p>
            <p>{props.item.outline} {genreElements} | {props.item.year}</p>
            <div className={classes.description}>{props.item.description}</div>
        </div>
    );
}

export default Overview;