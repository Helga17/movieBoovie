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
                <div>{props.activeElement.title}<span>{props.activeElement.rating}</span></div>
                <div>{props.activeElement.outline}</div>
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