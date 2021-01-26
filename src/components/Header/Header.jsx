import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';

// навигация

const Header = () => {
    return (
        <div className={classes.inner}>
            <div><NavLink to="/" className={classes.logo}>MovieBoovie</NavLink></div>
            <nav className={classes.nav}>
                    <NavLink to="/allmovies" className={classes.item}>Усі фільми</NavLink>
                    <NavLink to="/watchlist" className={classes.item}>Watchlist</NavLink>
                    <NavLink to="/checklist" className={classes.item}>Checklist</NavLink>
                    <NavLink to="/login" className={classes.item}>Увійти</NavLink>
                    <NavLink to="/register" className={classes.item}>Зареєструватися</NavLink>
            </nav>
        </div>
    );
}

export default Header;