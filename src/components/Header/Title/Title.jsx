import React from 'react';
import classes from './Title.module.css';


const Title = (props) => {
    return (
        <div className={classes.item}>
            <img src={props.image} />
            <div className={classes.text}>{props.title}</div>
        </div>
      
    );
}

export default Title;