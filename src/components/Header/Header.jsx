import React from 'react';
import classes from './Header.module.css';
import { NavLink } from 'react-router-dom';
import axios from 'axios';

const Header = (props) => {

    const logout = () => {
        props.setUser(null);
        localStorage.removeItem('passport');
    }

    return (
        <div className={classes.inner}>
            <div><NavLink to="/" className={classes.logo}>MovieBoovie</NavLink></div>
            <nav className={classes.nav}>
                <NavLink to="/allmovies" className={classes.item}>Усі фільми</NavLink>
                {props.currentUser && <NavLink to="/watchlist" className={classes.item}>Watchlist</NavLink>}
                {props.currentUser && <NavLink to="/checklist" className={classes.item}>Checklist</NavLink>}
                {props.currentUser && <span className={classes.item} onClick={logout}>Вийти</span>}
                {props.currentUser === null && <NavLink to="/login" className={classes.item}>Увійти</NavLink>}
                {props.currentUser === null && <NavLink to="/register" className={classes.item}>Зареєструватися</NavLink>}
            </nav>
        </div>
    );
}

export default Header;