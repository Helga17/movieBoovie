import React, { useState } from 'react';
import classes from './Checklist.module.css';
import { movies as moviesData } from '../../data/movies';

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const Checklist = (props) => {
    const n = getRandomArbitrary(1, 6);
    
    const shuffledMovies = moviesData.sort(() => 0.5 - Math.random());

    const randomMovies = shuffledMovies.slice(0, n);

    const [movies, setMovies] = useState(randomMovies);

    const sortByRating = () => {
        const clonedMovies = [...movies];
        const sortedMovies = clonedMovies.sort(function (a, b) {
            return b.rating - a.rating;
        });

        setMovies(sortedMovies);
    }

    const watchlist = movies.map(item => (
        <div key={item.id} className={classes.inner}>
            <div className={classes.item}>
                <img src={item.image} alt="" />
            </div>
            <div className={classes.info}>
                <h2 className={classes.title}>{item.title}</h2><span className={classes.rating}>{item.rating}/10</span>
                <p className={classes.originalTitle}>{item.originalTitle}</p>
                <p className={classes.outline}>{item.outline}</p>
                <div className={classes.description}>{item.description.slice(0,255)}...</div>
            </div>
            {/* <textarea></textarea> */}
        </div>
    ))

    return (
        <div className={classes.watchlist}>
            <h2 className={classes.label}>
                Checklist
            </h2>
            <div className={classes.panel}>
                <span>3 спостереження</span>
                <span>Сортувати за</span>
                <select name="" id="" onChange={sortByRating}>
                    <option> за алфавітом</option>
                    <option>за рейтингом</option>
                    <option>за датою</option>
                </select>
            </div>
            <div>
                {watchlist}
            </div>

        </div>
    );
}

export default Checklist;