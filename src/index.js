import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

let titlesPopular = [
  {id: 1, image:'https://m.media-amazon.com/images/M/MV5BYzg0NGM2NjAtNmIxOC00MDJmLTg5ZmYtYzM0MTE4NWE2NzlhXkEyXkFqcGdeQXVyMTA4NjE0NjEy._V1_.jpg', title: 'Тенет'},
  {id: 2, image: 'https://cdnb.artstation.com/p/assets/images/images/011/694/837/large/editician-zone-editician-zone-113.jpg?1530897875', title: 'Веном'},
  {id: 3, image: 'https://i.pinimg.com/236x/48/8c/9d/488c9dea43b1f7f0a07652028deb9dff.jpg', title: 'Джуманджі'},
  {id: 4, image: 'https://imgc.allpostersimages.com/img/posters/bad-boys-for-life_u-L-F9JL5Y0.jpg', title: 'Погані хлопці'},
  {id: 5, image: 'https://www.washingtonpost.com/graphics/2019/entertainment/oscar-nominees-movie-poster-design/img/green-book-web.jpg', title: 'Зелена книга'},
  {id: 6, image: 'https://i.pinimg.com/originals/cc/0e/0a/cc0e0a8601671c81c55ad9138c81ea62.jpg', title: 'Щоденник Памяті'},
  {id: 7, image: 'https://m.media-amazon.com/images/M/MV5BMTQ2NjE4NDE2NV5BMl5BanBnXkFtZTgwOTcwNDE5NzE@._V1_.jpg', title: 'До зустрічі з тобою'}
];

ReactDOM.render(
  <React.StrictMode>
    <App titlesPopular={titlesPopular} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
