import React from 'react';
import classes from './Watchlist.module.css';

const Watchlist = (props) => {
    return (
        <div className={ classes.watchlist }>
            <h2 className={ classes.label}>
                Watchlist
            </h2>
            <div className={ classes.panel }>
                <span>3 спостереження</span>
                <span>Сортувати за</span>
                <select name="" id="">
                    <option> за алфавітом</option>
                    <option>за рейтингом</option>
                    <option>за датою</option>
                </select>
            </div>
            <div className={ classes.item }>
                <img src='https://kinanema.net/_ld/35/3565.jpg' />
            </div>
            <div className={ classes.info }>
                <h2>Магія місячного сяйва</h2><span>6,5 / 10</span>
                <p>Magic In The Moonlight</p>
                <p>1г 37хв | Драма, Комедія, Роман | 2014</p>
            <div className={ classes.description }>Ілюзіоніст Стенлі Кроуфорд присвятив своє життя викриттю шахраїв-медіумів. Але одного разу він починає вірити в дар американської спіритки Софі…</div>
        </div>
        </div>
    );
}

export default Watchlist;