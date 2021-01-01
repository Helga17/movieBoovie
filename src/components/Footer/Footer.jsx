import React from 'react';
import classes from './Footer.module.css';

const Footer = () => {
    return (
        <footer className={ classes.footer }>
            <div class="copyright">
                © 2016 MovieBoovie by <span>Laaqiq</span>   
            </div>
        </footer>
    );
}

export default Footer;