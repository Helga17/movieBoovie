import React, { useState } from 'react';
import classes from './Watchlist.module.css';
import { movies as moviesData } from '../../data/movies';

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const Watchlist = (props) => {
    // const n = getRandomArbitrary(1, 6);

    // const shuffledMovies = moviesData.sort(() => 0.5 - Math.random());

    // const randomMovies = shuffledMovies.slice(0, n);

    const [movies, setMovies] = useState(moviesData);


    const sortByAlphabet = () => {
        const clonedMovies = [...movies];
        const sortedMovies = clonedMovies.sort(function (a, b){
            if(a.title < b.title) { return -1; }
            if(a.title > b.title) { return 1; }
            return 0;
        });

        setMovies(sortedMovies);
    }

    const sortByYear = () => {
        const clonedMovies = [...movies];
        const sortedMovies = clonedMovies.sort(function (a, b) {
            return b.year - a.year;
        });
        
        setMovies(sortedMovies);
    }

    // read about мутабельность 
    const sortByRating = () => {
        console.log('sorting');
        const clonedMovies = [...movies];
        const sortedMovies = clonedMovies.sort(function (a, b) {
            return b.rating - a.rating;
        });

        setMovies(sortedMovies);
    }

    const handleSorting = (event) => {
        const type = parseInt(event.target.value);

        switch (type) {
            case 2:
                sortByRating();
                break;
            
            case 1: 
                sortByAlphabet();
                break;

            case 3:
                sortByYear();
                break;
            default: 
                break

        }
    }

    const watchlist = movies.map(item => (
        <div key={item.id} className={classes.inner}>
            <div className={classes.item}>
                <img src={item.image} alt="" />
            </div>
            <div className={classes.info}>
                <h2>{item.title}</h2><span>{item.rating}</span>
                <p>{item.originalTitle}</p>
                <p>{item.outline} {item.year}</p>
                <div className={classes.description}>{item.description.slice(0, 255)}...</div>
            </div>
        </div>
    ))

    return (
        <div className={classes.watchlist}>
            <h2 className={classes.label}>
                Watchlist
            </h2>
            <div className={classes.panel}>
                <span>3 спостереження</span>
                <span>Сортувати за</span>
                <select name="" id="" onChange={handleSorting} value={0}>
                    <option disabled value={0}>choose option</option>
                    <option value={1}>за алфавітом</option>
                    <option value={2}>за рейтингом</option>
                    <option value={3}>за датою</option>
                </select>
            </div>
            <div>
                {watchlist}
            </div>

        </div>
    );
}

export default Watchlist;