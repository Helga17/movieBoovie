import React, { useEffect, useState } from 'react';
import classes from './Overview.module.css';
import { Link } from 'react-router-dom';
import StarRatings from 'react-star-ratings';

// информация о фильме Movie.jsx

function Overview(props) {

    let userWatchlist = JSON.parse(localStorage.getItem('movies'));
    if (userWatchlist === null) {
        userWatchlist = [];
    }

    const [watchlist, setWatchlist] = useState(JSON.parse(localStorage.getItem('movies')));
    const [isMovieOnWatchlist, setIsMovieOnWatchlist] = useState(Boolean(watchlist.find(watchlistMovie => watchlistMovie.id === props.item.id)));

    useEffect(() => {
        setIsMovieOnWatchlist(Boolean(watchlist.find(watchlistMovie => watchlistMovie.id === props.item.id)), 'bool');
    }, [watchlist, props.item.id])

    function handleRating (newRating, name) {
        console.log(newRating, name);
    }


    let genreElements = props.item.genres ? props.item.genres.map(genre => {
        return <span key={genre.id}><Link className={classes.link} to={'/genres/' + genre.id}>{genre.displayedTitle}</Link></span>
    }) : [];

    // добавление фильма в watchlist 
    function addMovie () {
        watchlist.push(props.item);

        setWatchlist(watchlist);
        setIsMovieOnWatchlist(!isMovieOnWatchlist);
        localStorage.setItem('movies', JSON.stringify(watchlist));
        alert('Фільм додан');
    }

    //удаление из watchlist
    function removeMovie () {
        let watchlistFiltered = watchlist.filter(watchlistMovie => watchlistMovie.id !== props.item.id);
        
        setWatchlist(watchlistFiltered);
        setIsMovieOnWatchlist(!isMovieOnWatchlist);
        localStorage.setItem('movies', JSON.stringify(watchlistFiltered));
        alert('Фільм видален');
    }

    // смена состояния при нажатии
    function Button () {
        if (isMovieOnWatchlist){
            return ( 
                <div className={classes.btnRemove}   onClick={() => removeMovie()}>
                    Видалити 
                </div>
            );
        }else{
             return (
                <div className={classes.btnAdd}  onClick={() => addMovie()}>
                    Додати
                </div>
            );
        }
    }

    return (
        <div className={classes.info}>
            <h2>{props.item.title}</h2><span>{props.item.rating}</span>
            <StarRatings
                    rating={4}
                    starRatedColor="red"
                    numberOfStars={10}
                    changeRating={handleRating}
                    starDimension={'25'}
                    name='rating'
                />
            
            <p >{props.item.originalTitle}</p>
            <p>{props.item.duration} {genreElements}|{ props.item.year}</p>
            <div className={classes.description}>{props.item.description}</div>

            <Button/>
        </div>
    );
}

export default Overview;