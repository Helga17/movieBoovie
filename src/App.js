import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Movies from './components/Movies/Movies';
import Movie from './components/Movies/Movie/Movie';
import Genre from './components/Genre/Gengre';
import Actor from './components/Actor/Actor';
import Watchlist from './components/Watchlist/Watchlist';
import Checklist from './components/Checklist/Checklist';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

const App = (props) => {
  
  return (
    <BrowserRouter>
    
      <div className="app-wrapper">
        <Navbar />
        <div className="app-wrapper-content">
        <Switch>
          <Route path='/' exact render={ () => <Header titlePopulars={props.titlePopulars} />}/>
          <Route path='/allmovies' component={ Movies } />
          <Route path='/watchlist' component={Watchlist } />
          <Route path='/checklist' component={Checklist } />
          <Route path='/genres/:title' component={ Genre } />
          <Route path='/actors/:id' component={ Actor } />
          <Route path='/:id' component={Movie} />
          
          </Switch>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
