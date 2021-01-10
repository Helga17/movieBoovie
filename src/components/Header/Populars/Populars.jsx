import React, { useState, useEffect } from 'react';
import classes from './Populars.module.css';
import InfoBlock from './InfoBlock/InfoBlock';
import { NavLink } from 'react-router-dom';
import { movies as moviesData } from '../../../data/movies';

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
        // clearing interval
        return () => clearInterval(timer);
    });

    const handleActiveElement = (element, index) => {
        setCurrentIndex(index);
        setActiveElement(element);
    };

    let popularElements = popularMovies.map((popular, index) => {
        const style = activeElement.id === popular.id ? {backgroundColor: "green"} : {};

        return (
            <div key={popular.id} className={classes.item} style={style} onClick={() => handleActiveElement(popular, index)}>
                <img src={popular.image} alt="" />
                <div className={classes.name}>{popular.title}</div>
            </div>
        )
    });

console.log(popularMovies, activeElement);

    return (
        <div>
            <div className={classes.title}>
                <h3>У тренді</h3>
                <NavLink to="/allmovies">Усі фільми</NavLink>
            </div>
            <div className={classes.trend}>
                {popularElements}
            </div>

            {activeElement && <InfoBlock activeElement={activeElement} />}
        </div>
    );
}

export default Populars;