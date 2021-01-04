import React from 'react';
import classes from './Overview.module.css';

function Overview(props) {
    return (
        <div className={ classes.info }>
            <h2>{ props.title }</h2><span>{ props.raiting }</span>
            <p>{ props.originalTitle }</p>
            <p>{ props.outline }</p>
            <div className={ classes.description }>{ props.description }</div>
        </div>
    );
}

export default Overview;