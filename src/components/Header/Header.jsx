import React from 'react';
import Cinema from './Cinema/Cinema';
import classes from './Header.module.css';
import Populars from './Populars/Populars';

const Title = (props) => {
    return (
        <div className={classes.text}>{props.title}</div>
    );
}

const Header = (props) => {

    let titleHeader = [
        {id: 1, title: 'Вона'},
        {id: 2, title: 'Маленькі Жінки'},
        {id: 3, title: 'Патерсон'}
    ];

    return (
        <div>
             <div className={classes.card}>
                <div className={classes.item}>
                    <img src="https://televisa.brightspotcdn.com/9c/7e/f1daaa1e4a07bb1efcc44835e5a7/jp18.jpg" alt="" />
                    <Title title={titleHeader[0].title} id={titleHeader[0].id} />
                </div>
                <div className={classes.item}>
                    <img src="https://img.huffingtonpost.com/asset/5d52e0352200005600f52a62.png?cache=ukwtq8j2oz&ops=1778_1000" alt="" />
                    <Title title={titleHeader[1].title} id={titleHeader[1].id} />
                </div>
                <div className={classes.item}>
                    <img src="https://kinonaszekspirowskim.pl/wp-content/uploads/2018/05/paterson-0-787x443.jpg" alt="" />
                    <Title title={titleHeader[2].title} id={titleHeader[2].id} />
                </div>
            </div>
            <Populars titlesPopular={props.titlesPopular} />
            <Cinema />
        </div>
       
    );
}

export default Header;