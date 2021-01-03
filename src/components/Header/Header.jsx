import React from 'react';
import Cinema from './Cinema/Cinema';
import classes from './Header.module.css';
import Populars from './Populars/Populars';

const Title = (props) => {
    return (
        <div className={classes.item}>
            <img src={props.image} />
            <div className={classes.text}>{props.title}</div>
        </div>
    );
}

const Header = (props) => {

    let titleHeader = [
        {id: 1, title: 'Вона', image: 'https://televisa.brightspotcdn.com/9c/7e/f1daaa1e4a07bb1efcc44835e5a7/jp18.jpg'},
        {id: 2, title: 'Маленькі Жінки', image: 'https://img.huffingtonpost.com/asset/5d52e0352200005600f52a62.png?cache=ukwtq8j2oz&ops=1778_1000'},
        {id: 3, title: 'Патерсон', image: 'https://kinonaszekspirowskim.pl/wp-content/uploads/2018/05/paterson-0-787x443.jpg'}
    ];

    let headerElements = titleHeader.map(title => <Title className={classes.header} image={title.image} title={title.title} />);

    return (
        <div>
            <div className={classes.card}>
                { headerElements }
            </div>
            <Populars />
            <Cinema />
        </div>
       
    );
}

export default Header;