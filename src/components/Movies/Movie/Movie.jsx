import React from 'react';
import classes from './Movie.module.css';

const Movie = (props) => {
    return(
        <div className={ classes.movies }>
            <div className={ classes.overview }>
                <div className={ classes.poster }>
                    <img src='https://static.kino.de/wp-content/uploads/2015/08/frida-2002-filmplakat-rcm300x428u.jpg' alt='frida' />
                </div>
                <div className={ classes.info }>
                    <h2>Фріда</h2><span>7,4 / 10</span>
                    <p>Frida (original title)</p>
                    <p>2г 3хв | Драма, Біографія, Роман | 20 Листопада 2002</p>
                    <div className={ classes.description }>Стрічка розповідає про непросте життя мексиканської художниці Фріди Кало. Молода дівчина 
                        потрапляє у аварію, де зазнає численних травм і переломів, через що виявляється загіпсованою
                        і прикутою до ліжка, а потім до кінця життя страждає від болю. Під час хвороби Фріда 
                        починає писати картини. Одужавши, вона показує їх відомому художнику Дієго Рівері, який 
                        згодом стає її вчителем, чоловіком і соратником у політичній боротьбі. Її кар'єра розвивається,
                        вона знайомиться з видатними людьми, зокрема Троцьким, Рокфеллером та іншими. Врешті-решт художниця 
                        вже на смертному одрі домагається відкриття власної виставки на батьківщині.
                    </div>
                </div>
            </div>
            <div className={ classes.subtitle }>Моменти кіно</div>
            <div className={ classes.moments }>
                <div className={ classes.moment }>
                    <img src='https://lh3.googleusercontent.com/-SFWiIWXlLcw/TYXFW2gacbI/AAAAAAAAAYQ/Zk5P639M1EE/s1600/story.jpg' alt='moment' />
                </div>
                <div className={ classes.moment }>
                    <img src='https://i.pinimg.com/originals/4a/2d/64/4a2d6401772e99086463882fface65e3.jpg' alt='moment' />
                </div>
                <div className={ classes.moment }>
                    <img src='https://screenqueens.files.wordpress.com/2018/09/17.jpg?w=640' alt='moment' />
                </div>
                <div className={ classes.moment }>
                    <img src='https://tricolortvmag.ru/upload/31f79a/170-sr008m.png' alt='moment' />
                </div>
            </div>

            <div className={ classes.subtitle }>Акторський склад</div>
            <div className={ classes.actors }>
                <div className={ classes.actor }>
                    <img src="https://i.pinimg.com/originals/5b/1c/04/5b1c04b853ab05c2eb22853dee0f9e53.jpg" alt=""/>
                    <p>Сальма Гаєк</p>
                    <p>Фріда Кало</p>
                </div>
                   <div className={ classes.actor }>
                    <img src="https://24smi.org/public/media/celebrity/2019/01/15/7z2vbbulvz7w-alfred-molina.jpg" alt=""/>
                    <p>Альфред Моліна</p>
                    <p>Дієго Рівера</p>
                </div>
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