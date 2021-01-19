import React from 'react';
import classes from './Media.module.css';
import { media } from '../../../data/media';

// отображение медиа на главной странице Content.jsx

const Media = () => {
    let mediaElements = media.map(item => (<div key={item.id} className={classes.item}>
        <iframe title={item.title} width="380" height="250" controls src={item.src} type="video/mp4"></iframe>
    </div>));

    return (
        <div>
            <div className={classes.title}>
                <h3>Незабаром у кіно</h3>
            </div>
            <div className={classes.media}>
                {mediaElements}
            </div>
        </div>
    );
}

export default Media;