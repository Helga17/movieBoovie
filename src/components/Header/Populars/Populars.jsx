import React from 'react';
import classes from './Populars.module.css';
import InfoBlock from './InfoBlock/InfoBlock';
import { NavLink } from 'react-router-dom';

const Title = (props) => {
    return (
        <div className={classes.item}>
            <img src={props.image} />
            <div className={classes.text}>{props.title}</div>
        </div>
      
    );
}

const Populars = (props) => {

    let titlePopulars = [
        {id: 1, image:'https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg', title: 'Тенет'},
        {id: 2, image: 'https://cdnb.artstation.com/p/assets/images/images/011/694/837/large/editician-zone-editician-zone-113.jpg?1530897875', title: 'Веном'},
        {id: 3, image: 'https://i.pinimg.com/236x/48/8c/9d/488c9dea43b1f7f0a07652028deb9dff.jpg', title: 'Джуманджі'},
        {id: 4, image: 'https://imgc.allpostersimages.com/img/posters/bad-boys-for-life_u-L-F9JL5Y0.jpg', title: 'Погані хлопці'},
        {id: 5, image: 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/green-book-web.jpg', title: 'Зелена книга'},
        {id: 6, image: 'https://i.pinimg.com/originals/cc/0e/0a/cc0e0a8601671c81c55ad9138c81ea62.jpg', title: 'Щоденник Памяті'},
        {id: 7, image: 'https://m.media-amazon.com/images/M/MV5BMTQ2NjE4NDE2NV5BMl5BanBnXkFtZTgwOTcwNDE5NzE@._V1_.jpg', title: 'До зустрічі з тобою'}
      ];

    let popularElements = titlePopulars.map(popular => <Title key={popular.id} image={popular.image} title={popular.title} />);

    return (
        <div>
            <div className={classes.title}>
                <h3>У тренді</h3>
                <NavLink to="/allmovies">Усі фільми</NavLink>
            </div>
                <div className={classes.trend}>
                    { popularElements }
                </div>

                <InfoBlock />
        </div>
    );
}

export default Populars;