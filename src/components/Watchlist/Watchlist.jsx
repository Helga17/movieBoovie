import React, { useState } from 'react';
import classes from './Watchlist.module.css';
import { useParams } from "react-router-dom";

const Watchlist = (props) => {

    let watchlistMovies = JSON.parse(localStorage.getItem('movies'));

    let { id } = useParams();
    const [movies, setMovies] = useState(watchlistMovies);

    const sortByAlphabet = () => {
        const clonedMovies = [...movies];
        const sortedMovies = clonedMovies.sort(function (a, b){
            if(a.title < b.title) { return -1; }
            if(a.title > b.title) { return 1; }
            return 0;
        });

        setMovies(sortedMovies);
    }

    const sortByYear = () => {
        const clonedMovies = [...movies];
        const sortedMovies = clonedMovies.sort(function (a, b) {
            return b.year - a.year;
        });
        
        setMovies(sortedMovies);
    }

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
            case 2:
                sortByRating();
                break;
            
            case 1: 
                sortByAlphabet();
                break;

            case 3:
                sortByYear();
                break;
            default: 
                break

        }
    }

    function movieDelete (props) {
        console.log(props)
        // let movie = movies.find(movie => movie.id === parseInt(id)); 
        let movie = movies.filter(movie => movie.id !== id)
        console.log(movie)
        let watchlist = JSON.parse(localStorage.getItem('movies'));

        watchlist.splice(movie);
        
        setMovies(watchlist);

        localStorage.setItem('movies', JSON.stringify(watchlist));
    }
      
    const watchlist = movies.map(item => (
        <div key={item.id} className={classes.inner}>
            <div className={classes.item}>
                <img src={item.image} alt="" />
            </div>

            <div className={classes.info}>
                <h2>{item.title}</h2><span>{item.rating}</span>
                <p>{item.originalTitle}</p>
                <p>{item.outline} {item.year}</p>
                <div className={classes.description}>{item.description.slice(0, 255)}...</div>
            </div>

            <div className={classes.btnDelete} onClick={movieDelete}>X</div>
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
                    <option disabled value={0}>choose option</option>
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