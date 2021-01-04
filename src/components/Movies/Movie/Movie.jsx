import React from 'react';
import classes from './Movie.module.css';
import Overview from '../../Overview/Overview';

function Moment(props) {
    return (
        <div className={ classes.moment }>
            <img src={ props.image } />
        </div>
    );
}

function Actor(props) {
    return (
        <div className={ classes.actor }>
            <img src={ props.image } />
            <p className={ classes }>{ props.name }</p>
            <p className={ classes }>{ props.role }</p>
        </div>
    );
}

const Movie = (props) => {

    let overviewData = [
        {id: 1, 
        title: 'Фріда',
        raiting: '7,4 / 10',
        originalTitle: 'Frida (original title)',
        outline: '2г 3хв | Драма, Біографія, Роман | 20 Листопада 2002',
        description: "Стрічка розповідає про непросте життя мексиканської художниці Фріди Кало. Молода дівчина потрапляє у аварію, де зазнає численних травм і переломів, через що виявляється загіпсованою і прикутою до ліжка, а потім до кінця життя страждає від болю. Під час хвороби Фріда починає писати картини. Одужавши, вона показує їх відомому художнику Дієго Рівері, який згодом стає її вчителем, чоловіком і соратником у політичній боротьбі. Її кар'єра розвивається,вона знайомиться з видатними людьми, зокрема Троцьким, Рокфеллером та іншими. Врешті-решт художниця вже на смертному одрі домагається відкриття власної виставки на батьківщині.",
        }
    ];

    let owerviewElement = overviewData.map(overview => <Overview key={overview.id} image={overview.image} title={overview.title} raiting={overview.raiting} originalTitle={overview.originalTitle} outline={overview.outline} description={overview.description} />);

    let momentsData = [
        {id: 1, image: 'https://lh3.googleusercontent.com/-SFWiIWXlLcw/TYXFW2gacbI/AAAAAAAAAYQ/Zk5P639M1EE/s1600/story.jpg'},
        {id: 2, image: 'https://i.pinimg.com/originals/4a/2d/64/4a2d6401772e99086463882fface65e3.jpg'},
        {id: 3, image: 'https://screenqueens.files.wordpress.com/2018/09/17.jpg?w=640'},
        {id: 4, image: 'https://tricolortvmag.ru/upload/31f79a/170-sr008m.png'}
    ];

    let momentElements = momentsData.map(moment => <Moment key={moment.id} image={moment.image} />)

    let actorsData = [
        {id: 1, actor: 'Сальма Гаєк', role: 'Фріда Кало', image: 'https://i.pinimg.com/originals/5b/1c/04/5b1c04b853ab05c2eb22853dee0f9e53.jpg'},
        {id: 2, actor: 'Альфред Моліна', role: 'Дієго Рівера', image: 'https://24smi.org/public/media/celebrity/2019/01/15/7z2vbbulvz7w-alfred-molina.jpg'},
        {id: 3, actor: 'Едвард Нортон', role: 'Нельсон Рокфеллер', image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSjz7cIu71bmwJWdbE1pZBanKO-l1NzepbwpQ&usqp=CAU'}
    ];

    let actorElements = actorsData.map(actor => <Actor key={actor.id} image={actor.image} name={actor.actor} role={actor.role} />)

    return(
        <div className={ classes.movies }>
            <div className={ classes.overview }>
                <div className={ classes.poster }>
                    <img src='https://static.kino.de/wp-content/uploads/2015/08/frida-2002-filmplakat-rcm300x428u.jpg' alt='frida' />
                </div>
                { owerviewElement }
            </div>
            <div className={ classes.subtitle }>Моменти кіно</div>
            <div className={ classes.moments }>
                { momentElements}
            </div>

            <div className={ classes.subtitle }>Акторський склад</div>
            <div className={ classes.actors }>
                { actorElements }
            </div>
            <div className={ classes.subtitle }>
                <span>Режисер:</span>
                <span className={ classes.filmmaker }>
                    <span>Джулі Теймор</span>
                </span>  
            </div>
        </div>
    );
}

export default Movie;