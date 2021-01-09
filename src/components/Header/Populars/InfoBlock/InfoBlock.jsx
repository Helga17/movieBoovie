import React from 'react';
import classes from './InfoBlock.module.css';
import {movies} from '../../../../data/movies';
import { useParams } from "react-router-dom";

const InfoBlock = (props) => {
    let { id } = useParams();
    let movie = movies.find(movie => movie.id === parseInt(id));
    return (
        <div className={ classes.info }>
            <div className={ classes.item }>
                <img src="https://cinemusefilms.files.wordpress.com/2016/06/87-me-before-you.jpg" alt="" />
                {/* <img src={image} alt=""/> */}
            </div>
            <div className={ classes.item }>
                <div>До зустрічі з тобою<span>7.8/10</span></div>
                <div>#Genre #Genre</div>
                <div className={classes.description}>
                    Заснований на однойменному романі-бестселері фільм переносить глядачів у невелике провінційне містечко, де живе головна героїня Луїза Кларк. Вона - абсолютно звичайна дівчина, замкнена в повсякденності сірих буднів. Лу знає про багато речей - що їй не подобається її робота, як багато кроків від автобусної зупинки до її будинку і що Патрік їй не пара. Але дівчина і уявити не може, що зовсім скоро її життя повністю зміниться - вона позбудеться ненависної роботи і зможе, нарешті, позбутися від хлопця, якого насправді не любить. Але з рішенням її проблем, на героїню драми «До зустрічі з тобою» навалюється і безліч інших неприємностей. Паралельно історія розповідає нам про якийсь Уілл Трейнора - молодому спортсменові, якого ...
                </div>
                <a href="#a" className={classes.btn}>Детальніше</a>
            </div>
        </div>
    );
}

export default InfoBlock;