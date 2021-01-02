import React from 'react';
import classes from './Populars.module.css';
import InfoBlock from './InfoBlock/InfoBlock';
import { NavLink } from 'react-router-dom';
import Title from '../Title/Title';

const Populars = (props) => {

    let popularsElements = 
        props.titlesPopular.map(popular => <Title key={popular.id} image={popular.image} title={popular.title} />);

    return (
        <div>
            <div className={classes.title}>
                <h3>У тренді</h3>
                <NavLink to="/allmovies">Усі фільми</NavLink>
            </div>
                <div className={classes.trend}>
                    { popularsElements }
                </div>

                <InfoBlock />
        </div>
    );
}

export default Populars;