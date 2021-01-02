import React from 'react';
import classes from './Cinema.module.css';

const Title = (props) => {
    return (
        <div className={classes.text}>{props.title}</div>
    );
}

const Cinema = (props) => {

    let titleCinema = [
        {id: 1, title: 'Вона'},
        {id: 2, title: 'Маленькі Жінки'},
        {id: 3, title: 'Патерсон'}
    ];

    return (
        <div>
            <div className={classes.title}>
                <h3>Незабаром у кіно</h3>
            </div>
            <div className={classes.cinema}>
                <div className={classes.item}>
                    <video width="380" height="250" controls >
                    <source src="https://www.youtube.com/embed/tgbNymZ7vqY" type="video/mp4"/>
                    </video>
                    <Title title={titleCinema[0].title} id={titleCinema[0].id} />
                </div>

                <div className={classes.item}>
                    <video width="380" height="250" controls >
                        <source src="https://www.youtube.com/embed/tgbNymZ7vqY" type="video/mp4"/>
                    </video>
                    <Title title={titleCinema[1].title} id={titleCinema[1].id} />
                </div>

                <div className={classes.item}>
                    <video width="380" height="250" controls >
                       <source src="https://www.youtube.com/embed/tgbNymZ7vqY" type="video/mp4"/>
                    </video>
                    <Title title={titleCinema[2].title} id={titleCinema[2].id} />
                </div>
            </div>
        </div>
    );
}

export default Cinema;