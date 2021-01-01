import React from 'react';
import classes from './Navbar.module.css';

const Navbar = () => {
    return (
        <div className={classes.inner}>
            <div className={classes.logo}>MovieBoovie</div>
            <nav className={classes.nav}>
                {/* <div className={classes.item}>
                    Усі жанри
                </div>
                <div className={classes.item}>
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