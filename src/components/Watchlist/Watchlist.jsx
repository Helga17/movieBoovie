import React, { useState } from 'react';
import classes from './Watchlist.module.css';
import { Link } from 'react-router-dom';

const Watchlist = (props) => {

    // let { id } = useParams();
    let watchlistMovies = JSON.parse(localStorage.getItem('movies'));

    const [movies, setMovies] = useState(watchlistMovies);

    // сортировка за алфавитом
    const sortByAlphabet = () => {
        const clonedMovies = [...movies];
        const sortedMovies = clonedMovies.sort(function (a, b) {
            if (a.title < b.title) { return -1; }
            if (a.title > b.title) { return 1; }
            return 0;
        });

        setMovies(sortedMovies);
    }

    // сортировка за годом
    const sortByYear = () => {
        const clonedMovies = [...movies];
        const sortedMovies = clonedMovies.sort(function (a, b) {
            return b.year - a.year;
        });

        setMovies(sortedMovies);
    }

    // сортировка за рейтингом
    const sortByRating = () => {
        const clonedMovies = [...movies];
        const sortedMovies = clonedMovies.sort(function (a, b) {
            return b.rating - a.rating;
        });

        setMovies(sortedMovies);
    }

    const handleSorting = (event) => {
        const type = parseInt(event.target.value);

        switch (type) {
            case 1:
                sortByAlphabet();
                break;

            case 2:
                sortByRating();
                break;

            case 3:
                sortByYear();
                break;

            default:
                break
        }
    }

    // удаление из watchlist 
    function handleRemove(id) {
        let filteredMovies = movies.filter((item) => item.id !== id)
        setMovies(filteredMovies);
        localStorage.setItem('movies', JSON.stringify(filteredMovies));
    }

    const watchlist = movies.map(item => (
        <div key={item.id} className={classes.inner}>
            <div className={classes.item}>
                <img src={item.image} alt="" />
            </div>

            <div className={classes.info}>
                <Link key={item.id} to={`movies/${item.id}`} className={classes.link}>
                    <h2>{item.title}</h2>
                </Link>
                <span>{item.rating}</span>
                <p>{item.originalTitle}</p>
                <p>{item.outline} {item.year}</p>
                <div className={classes.description}>{item.description.slice(0, 255)}...</div>
            </div>

            <div className={classes.btnDelete} onClick={() => handleRemove(item.id)}>X</div>
        </div>
    ))

    return (
        <div className={classes.watchlist}>
            <h2 className={classes.label}>
                Watchlist
            </h2>
            <div className={classes.panel}>
                <span>3 спостереження</span>
                <span>Сортувати за</span>
                <select name="" id="" onChange={handleSorting} value={0}>
                    <option disabled value={0}>Обрати за</option>
                    <option value={1}>за алфавітом</option>
                    <option value={2}>за рейтингом</option>
                    <option value={3}>за датою</option>
                </select>
            </div>
            <div>
                {watchlist}
            </div>
        </div>
    );
}

export default Watchlist;