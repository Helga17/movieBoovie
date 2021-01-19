import React, { useState, useEffect } from 'react';
import classes from './Populars.module.css';
import InfoBlock from './InfoBlock/InfoBlock';
import { NavLink } from 'react-router-dom';
import { movies as moviesData } from '../../../data/movies';

// отображение популярных фильмов на главной странице Content.jsx

const Populars = (props) => {
    const popularMovies = moviesData.filter(movie => movie.isPopular);
    let [currentIndex, setCurrentIndex] = useState(0);
    let [activeElement, setActiveElement] = useState(popularMovies[currentIndex]);

    useEffect(() => {
        const timer = setInterval(() => {
            let index = currentIndex + 1;

            if (currentIndex === popularMovies.length - 1) {
                setCurrentIndex(0);
            } else {
                setCurrentIndex(index);
            }

            if (typeof popularMovies[currentIndex] !== "undefined") {
                setActiveElement(popularMovies[currentIndex]);
            }

        }, 5000);
        return () => clearInterval(timer);
    });

    const handleActiveElement = (element, index) => {
        setCurrentIndex(index);
        setActiveElement(element);
    };

    let popularElements = popularMovies.map((popular, index) => {
        const style = activeElement.id === popular.id ? { opacity: 1 } : { opacity: 0.55 };

        return (
            <div key={popular.id} className={classes.item} style={style} onClick={() => handleActiveElement(popular, index)}>
                <img src={popular.image} alt="" />
                <div className={classes.name}>{popular.title}</div>
            </div>
        )

    });

    function getPrevious () {
 
    }

    function getNext () {
    }

    return (
        <div>
            <div className={classes.title}>
                <h3>У тренді</h3>
                <NavLink to="/allmovies" className={classes.allMovies}>Усі фільми</NavLink>
            </div>
            <div className={classes.trend}>
                <button className={classes.prev} onClick={getPrevious}></button>
                    {popularElements}
                <button className={classes.next} onClick={getNext}></button>
            </div>

            {activeElement && <InfoBlock activeElement={activeElement} />}
        </div>
    );
}

export default Populars;