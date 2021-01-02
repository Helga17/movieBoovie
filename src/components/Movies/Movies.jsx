import React from 'react';
import classes from './Movies.module.css';

function Title(props) {
    return (
        <div className={classes.text}>{props.title}</div>
    );
}

const Movies = (props) => {
    let titlePopular = [
        {id: 1, title: 'Тенет'},
        {id: 2, title: 'Веном'},
        {id: 3, title: 'Джуманджі'},
        {id: 4, title: 'Погані хлопці'},
        {id: 5, title: 'Зелена книга'},
        {id: 6, title: 'Щоденник Памяті'},
        {id: 7, title: 'До зустрічі з тобою'},
        {id: 8, title: 'Близкість'},
        {id: 9, title: 'З любовью, Саймон'},
        {id: 10, title: 'Керол'},
        {id: 11, title: 'Магія місячного сяйва'},
        {id: 12, title: 'Пара на свята'},
        {id: 13, title: 'Зависнути у Палм-Спрінгз'},
        {id: 14, title: 'Фріда'}
    ];

    let popularsElements = titlePopular.map(popular => <Title title={popular.title} id={popular.id} />)

    return (
        <div className={ classes.item }>
           <div className={classes.movies}>
                <div className={classes.item}>
                    <img src="https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg" alt="" />
                    <Title className={classes.title} title={titlePopular[0].title} id={titlePopular[0].id} />
                </div>

                <div className={classes.item}>
                    <img src="https://cdnb.artstation.com/p/assets/images/images/011/694/837/large/editician-zone-editician-zone-113.jpg?1530897875" alt="" />
                    <Title className={classes.title} title={titlePopular[1].title} id={titlePopular[1].id} />
                </div>

                <div className={classes.item}>
                    <img src="https://i.pinimg.com/236x/48/8c/9d/488c9dea43b1f7f0a07652028deb9dff.jpg" alt="" />
                    <Title className={classes.title} title={titlePopular[2].title} id={titlePopular[2].id} />
                </div>

                <div className={classes.item}>
                    <img src="https://imgc.allpostersimages.com/img/posters/bad-boys-for-life_u-L-F9JL5Y0.jpg" alt="" />
                    <Title className={classes.title} title={titlePopular[3].title} id={titlePopular[3].id} />
                </div>

                <div className={classes.item}>
                    <img src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/green-book-web.jpg" alt="" />
                    <Title className={classes.title} title={titlePopular[4].title} id={titlePopular[4].id} />
                </div>

                <div className={classes.item}>
                    <img src="https://i.pinimg.com/originals/cc/0e/0a/cc0e0a8601671c81c55ad9138c81ea62.jpg" alt="" />
                    <Title className={classes.title} title={titlePopular[5].title} id={titlePopular[5].id} />
                </div>

                <div className={classes.item}>
                    <img src="https://m.media-amazon.com/images/M/MV5BMTQ2NjE4NDE2NV5BMl5BanBnXkFtZTgwOTcwNDE5NzE@._V1_.jpg" alt="" />
                    <Title className={classes.title} title={titlePopular[6].title} id={titlePopular[6].id} />
                </div>
            </div>
            <div className={classes.movies}>
                <div className={classes.item}>
                    <img src="https://images-na.ssl-images-amazon.com/images/I/51U8Zp3bAiL._AC_.jpg" alt="" />
                    <Title className={classes.title} title={titlePopular[7].title} id={titlePopular[7].id} />
                </div>

                <div className={classes.item}>
                    <img src="https://lostfilm.info/images/poster/547/5469864.jpg" alt="" />
                    <Title className={classes.title} title={titlePopular[8].title} id={titlePopular[8].id} />
                </div>

                <div className={classes.item}>
                    <img src="http://sonrazuma.ru/pics/films/c/carol/carol_poster.jpg" alt="" />
                    <Title title={titlePopular[9].title} id={titlePopular[9].id} />
                </div>

                <div className={classes.item}>
                    <img src="https://kinanema.net/_ld/35/3565.jpg" alt="" />
                    <div className={classes.title}><Title  title={titlePopular[10].title} id={titlePopular[10].id} /></div> 
                </div>

                <div className={classes.item}>
                    <img src="https://lh3.googleusercontent.com/proxy/FxIjzVVJCfUGlagLffvOZI7N2qVrwyHg0VUBdNbDz1U6ypqaS2SmYx3o0NeeX9QECA9P0xEqIzXFLV6PQZYKrlZd8GNdizDZ4xWWDxHOnujnMmHU" alt="" />
                    <Title className={classes.title} title={titlePopular[11].title} id={titlePopular[11].id} />
                </div>

                <div className={classes.item}>
                    <img src="https://www.kino-teatr.ru/movie/poster/140940/100478.jpg" alt="" />
                    <div className={classes.title} ><Title title={titlePopular[12].title} id={titlePopular[12].id} /></div>
                </div>

                <div className={classes.item}>
                    <img src="https://static.kino.de/wp-content/uploads/2015/08/frida-2002-filmplakat-rcm300x428u.jpg" alt="" />
                    <Title className={classes.title} title={titlePopular[13].title} id={titlePopular[13].id} />
                </div>
            </div>
        
        </div>
    );
}

export default Movies;