import React from 'react';
import classes from './Populars.module.css';

const Populars = () => {
    return (
        <div>
            <div class={classes.title}>
                <h3>У тренді</h3>
            </div>
                <div class={classes.trend}>
                    <div class={classes.item}>
                        <img src="https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg" alt="" />
                        <div class="trend_text">
                            Тенет
                        </div>
                    </div>

                    <div class={classes.item}>
                        <img src="https://cdnb.artstation.com/p/assets/images/images/011/694/837/large/editician-zone-editician-zone-113.jpg?1530897875" alt="" />
                        <div class="trend_text">
                            Веном
                        </div>
                    </div>

                    <div class={classes.item}>
                        <img src="https://i.pinimg.com/236x/48/8c/9d/488c9dea43b1f7f0a07652028deb9dff.jpg" alt="" />
                        <div class="trend_text">
                            Джуманджі
                        </div>
                    </div>

                    <div class={classes.item}>
                        <img src="https://imgc.allpostersimages.com/img/posters/bad-boys-for-life_u-L-F9JL5Y0.jpg" alt="" />
                        <div class="trend_text">
                            Погані хлопці
                        </div>
                    </div>

                    <div class={classes.item}>
                        <img src="https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/green-book-web.jpg" alt="" />
                        <div class="trend_text">
                            Зелена книга
                        </div>
                    </div>

                    <div class={classes.item}>
                        <img src="https://i.pinimg.com/originals/cc/0e/0a/cc0e0a8601671c81c55ad9138c81ea62.jpg" alt="" />
                        <div class="trend_text">
                            Щоденник Пам'яті
                        </div>
                    </div>

                    <div class={classes.item}>
                        <img src="https://m.media-amazon.com/images/M/MV5BMTQ2NjE4NDE2NV5BMl5BanBnXkFtZTgwOTcwNDE5NzE@._V1_.jpg" alt="" />
                        <div class="trend_text">
                            До зустрічі з тобою
                        </div>
                    </div>
                </div>
        </div>
    );
}

export default Populars;