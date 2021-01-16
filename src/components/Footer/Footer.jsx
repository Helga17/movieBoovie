import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={ classes.footer }>
            <div className={ classes.text }>
                © 2021 MovieBoovie 
            </div>
        </footer>
    );
}

export default Footer;