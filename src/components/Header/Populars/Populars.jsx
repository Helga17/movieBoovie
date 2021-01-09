import React from 'react';
import classes from './Populars.module.css';
import InfoBlock from './InfoBlock/InfoBlock';
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { movies as moviesData } from '../../../data/movies';


function Title(props) {
    return (
        <Link key={props.item.id} to={`/${props.item.id}`}>
            <div className={classes.item}>
                <img src={props.item.image} alt=""/>
                <div className={classes.title}>{props.item.title}</div>
            </div>
        </Link>
    );
}

function getRandomArbitrary(min, max) {
    return Math.random() * (max - min) + min;
}

const Populars = (props) => {
    const n = getRandomArbitrary(7, 8);
    
    const shuffledMovie = moviesData.sort(() => 0.5 - Math.random());

    const randomMovie = shuffledMovie.slice(0, n);

    let popularElements = randomMovie.map(popular => (<div className={classes.item} key={popular.id}><img src={popular.image} alt="" />
        <div className={classes.name}>{popular.title}</div></div>));


    return (
        <div>
            <div className={classes.title}>
                <h3>У тренді</h3>
                <NavLink to="/allmovies">Усі фільми</NavLink>
            </div>
            <div className={classes.trend}>
            {/* <Link key={props.item.id} to={`/${props.item.id}`}> */}
                { popularElements }
            {/* </Link> */}
                
            </div>
            
            <InfoBlock />
        </div>
    );
}

export default Populars;