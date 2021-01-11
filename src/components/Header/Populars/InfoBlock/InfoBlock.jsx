import React from 'react';
import classes from './InfoBlock.module.css';
import { Link } from 'react-router-dom';

const InfoBlock = (props) => {
    console.log(props);
    return (
        <div className={ classes.info }>
            <div className={ classes.item }>
                <img src={props.activeElement.image || ''} alt={""} />
            </div>
            <div className={ classes.item }>
                <div className={classes.title}>{props.activeElement.title}<span className={classes.rating}>{props.activeElement.rating} <span className={classes.from}> / 10</span></span></div>
                <div className={classes.outline}>{props.activeElement.outline} | {props.activeElement.year}</div>
                <div className={classes.description}>
                    {props.activeElement.description}
                </div>
                <Link className={classes.btn} key={props.activeElement.id} to={`/${props.activeElement.id}`}>
                    Детальніше
                </Link>
            </div>
        </div>
    );
}

export default InfoBlock;