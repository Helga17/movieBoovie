import React from 'react';
import Media from './Media/Media';
import classes from './Content.module.css';
import Populars from './Populars/Populars';

const Title = (props) => {
    return (
        <div className={classes.item}>
            <img src={props.image} alt={""}/>
            <div className={classes.text}>{props.title}</div>
        </div>
    );
}

const Content = (props) => {

    let titleContent = [
        {id: 1, title: 'Вона', image: 'https://televisa.brightspotcdn.com/9c/7e/f1daaa1e4a07bb1efcc44835e5a7/jp18.jpg'},
        {id: 2, title: 'Маленькі Жінки', image: 'https://img.huffingtonpost.com/asset/5d52e0352200005600f52a62.png?cache=ukwtq8j2oz&ops=1778_1000'},
        {id: 3, title: 'Патерсон', image: 'https://kinonaszekspirowskim.pl/wp-content/uploads/2018/05/paterson-0-787x443.jpg'}
    ];

    let contentElements = titleContent.map(title => <Title key={title.id} className={classes.content} image={title.image} title={title.title} />);

    return (
        <div>
            <div className={classes.card}>
                { contentElements }
            </div>
            <Populars />
            <Media />
        </div>
       
    );
}

export default Content;