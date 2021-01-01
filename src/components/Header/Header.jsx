import React from 'react';
import classes from './Header.module.css';

const Header = () => {
    return (
        <div className={classes.card}>
            <div className={classes.item}>
                <img src="https://televisa.brightspotcdn.com/9c/7e/f1daaa1e4a07bb1efcc44835e5a7/jp18.jpg" alt="" />
                <div className={classes.text}>Вона</div>
            </div>
            <div className={classes.item}>
                <img src="https://img.huffingtonpost.com/asset/5d52e0352200005600f52a62.png?cache=ukwtq8j2oz&ops=1778_1000" alt="" />
                <div className={classes.text}>Маленькі Жінки</div>
            </div>
            <div className={classes.item}>
                <img src="https://kinonaszekspirowskim.pl/wp-content/uploads/2018/05/paterson-0-787x443.jpg" alt="" />
                <div className={classes.text}>Патерсон</div>
            </div>
        </div>
    );
}

export default Header;