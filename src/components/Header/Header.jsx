import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

// навигация

const Header = () => {
    return (
        <div className={classes.inner}>
            <div><NavLink to="/" className={classes.logo}>MovieBoovie</NavLink></div>
            <nav className={classes.nav}>
                    <NavLink to="/allmovies" className={classes.item}>Усі жанри</NavLink>
                    <NavLink to="/watchlist" className={classes.item}>Watchlist</NavLink>
                    <NavLink to="/checklist" className={classes.item}>Checklist</NavLink>
            </nav>
        </div>
    );
}

export default Header;