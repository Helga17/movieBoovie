import React from 'react';
import classes from './Movies.module.css';

function Title(props) {
    return (
        <div className={ classes.item }>
            <img src={ props.image } />
            <div className={ classes.title }>{ props.title }</div>
        </div>
    );
}

const Movies = (props) => {
    let moviesData = [
        {id: 1, title: 'Тенет', image: 'https://kino-teatr.ua/public/main/films/2020-07/x2_poster_5efd634e8ff7a.jpg'},
        {id: 2, title: 'Веном', image: 'https://i8.rozetka.ua/goods/15455418/153782392_images_15455418336.jpg'},
        {id: 3, title: 'Джуманджі', image: 'https://i.pinimg.com/236x/48/8c/9d/488c9dea43b1f7f0a07652028deb9dff.jpg'},
        {id: 4, title: 'Погані хлопці', image: 'https://imgc.allpostersimages.com/img/posters/bad-boys-for-life_u-L-F9JL5Y0.jpg'},
        {id: 5, title: 'Зелена книга', image: 'https://i.pinimg.com/originals/53/bc/20/53bc202e12b8d658929883c2b4b98473.jpg'},
        {id: 6, title: 'Щоденник Памяті', image: 'https://i.pinimg.com/originals/cc/0e/0a/cc0e0a8601671c81c55ad9138c81ea62.jpg'},
        {id: 7, title: 'До зустрічі з тобою', image: 'https://m.media-amazon.com/images/M/MV5BMTQ2NjE4NDE2NV5BMl5BanBnXkFtZTgwOTcwNDE5NzE@._V1_.jpg'},
        {id: 8, title: 'Близкість', image: 'https://images-na.ssl-images-amazon.com/images/I/51U8Zp3bAiL._AC_.jpg'},
        {id: 9, title: 'З любовью, Саймон', image: 'https://lostfilm.info/images/poster/547/5469864.jpg'},
        {id: 10, title: 'Керол', image: 'http://sonrazuma.ru/pics/films/c/carol/carol_poster.jpg'},
        {id: 11, title: 'Магія місячного сяйва', image: 'https://kinanema.net/_ld/35/3565.jpg'},
        {id: 12, title: 'Пара на свята', image: 'https://kino-teatr.ua/public/main/films/2020-10/poster_5f7b04112e63a.jpg'},
        {id: 13, title: 'Зависнути у Палм-Спрінгз', image: 'https://www.kino-teatr.ru/movie/poster/140940/100478.jpg'},
        {id: 14, title: 'Фріда', image: 'https://static.kino.de/wp-content/uploads/2015/08/frida-2002-filmplakat-rcm300x428u.jpg'}
    ];

    let movieElements = moviesData.map(movie => <Title key={movie.id} image={movie.image} title={movie.title} />);

    return (
        <div className={ classes.item }>
           <div className={classes.movies}>
                { movieElements }
            </div> 
        </div>
    );
}

export default Movies;