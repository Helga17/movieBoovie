import React from 'react';
import classes from './Overview.module.css';

function Overview(props) {
    return (
        <div className={ classes.info }>
            <h2>{ props.item.title }</h2><span>{ props.item.raiting }</span>
            <p>{ props.item.originalTitle }</p>
            <p>{ props.item.outline }</p>
            <div className={ classes.description }>{ props.item.description }</div>
        </div>
    );
}

export default Overview;