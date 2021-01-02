import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={classes.inner}>
            <div className={classes.logo}><NavLink to="/main">MovieBoovie</NavLink></div>
            <nav className={classes.nav}>
                <div className={classes.item}>
                    <NavLink to="/allmovies">Усі жанри</NavLink>
                </div>
                 {/*<div className={classes.item}>
                    За весь час
                </div>
                <div className={classes.item}>
                    ПОШУК
                </div>
                <div className={classes.item}>
                    Профіль
                </div> */}
            </nav>
        </div>
    );
}

export default Navbar;