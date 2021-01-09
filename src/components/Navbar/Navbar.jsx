import React from 'react';
import classes from './Navbar.module.css';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className={classes.inner}>
            <div className={classes.logo}><NavLink to="/">MovieBoovie</NavLink></div>
            <nav className={classes.nav}>
                <div className={classes.item}>
                    <NavLink to="/allmovies">Усі жанри</NavLink>
                </div>
                <div className={classes.item}>
                    <NavLink to="/watchlist">Watchlist</NavLink>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;