import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import classes from './Movies.module.css';
import axios from 'axios';

const Movies = (props) => {

    const [movies, setMovies] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [lastPage, setLastPage] = useState(1);
    const [moviesPerPage, setMoviesPerPage] = useState(1);  //perPage количество элементов на странице

    function getMovies(per_page, page) {
        axios.get('http://127.0.0.1:8000/api/movies', { params: { per_page: per_page, page: page } })
            .then(result => {
                const moviesData = result.data.data;

                setMovies(moviesData);
                setCurrentPage(result.data.current_page);
                setLastPage(result.data.last_page);
            });
    }

    useEffect(() => {
        getMovies(moviesPerPage, 1);
    }, []);

    function handlePaginate(page) {
        if (currentPage === page) {
            return null;
        }

        getMovies(moviesPerPage, page);
    }

    const pageNumbers = [];
    const delimeter = 4;
    for (let i = 1; i <= lastPage; i++) {

        if (i === delimeter + 2) {
            pageNumbers.push('...');
        }

        if (i > 1 + delimeter && i < lastPage - delimeter) {
            continue;
        }

        pageNumbers.push(i);
    }
    
    const renderPageNumbers = pageNumbers.map(number => {
        const style = currentPage === number ? { color: 'red' } : { color: 'black' };

        return (
            <span style={style} key={number} id={number} onClick={() => handlePaginate(number)}>
                {number}
            </span>
        );
    });

    function getPrevious() {
        if (currentPage === 1) {
            return null;
        }

        const page = currentPage - 1;
        getMovies(moviesPerPage, page);
    }

    function getNext() {
        if (currentPage === lastPage) {
            return null;
        }

        const page = currentPage + 1;
        getMovies(moviesPerPage, page);
    }

    let movieElements = movies.map(movie => {
        return (
            <div>
                <Link className={classes.link} key={movie.id} to={`movies/${movie.id}`}>
                    <div className={classes.item}>

                        <div className={classes.item}>
                            <img src={movie.image} alt="" />
                            <div className={classes.title}>{movie.title}</div>
                        </div>

                    </div>
                </Link>
            </div>
        );
    });
    return (
        <div>
            <div className={classes.item}>
                <div className={classes.movies}>
                    {movieElements}
                </div>
                <div className={classes.paginate}>
                    <span style={currentPage === 1 ? { color: "red" } : { color: "black" }} className={classes.prev} onClick={getPrevious}>Попередня</span>
                        {renderPageNumbers}
                    <span style={currentPage === lastPage ? { color: "red" } : { color: "black" }} className={classes.next} onClick={getNext}>Наступна</span>
                </div>

            </div>
        </div>


    );
}

export default Movies;