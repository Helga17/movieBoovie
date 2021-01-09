import React from 'react';
import classes from './Cinema.module.css';
import { cinema } from '../../../data/cinema';

const Cinema = () => {
    let cinemaElements = cinema.map(item => (<div key={item.id} className={classes.item}>
        <iframe title={item.title} width="380" height="250" controls src={item.src} type="video/mp4"></iframe>
    </div>));

    return (
        <div>
            <div className={classes.title}>
                <h3>Незабаром у кіно</h3>
            </div>
            <div className={classes.cinema}>
                {cinemaElements}
            </div>
        </div>
    );
}

export default Cinema;