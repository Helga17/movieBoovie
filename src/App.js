import './App.css';
import Content from './components/Content/Content';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Movies from './components/Movies/Movies';
import Movie from './components/Movies/Movie/Movie';
import Genre from './components/Genre/Gengre';
import Actor from './components/Actor/Actor';
import Watchlist from './components/Watchlist/Watchlist';
import Checklist from './components/Checklist/Checklist';
import Authorization from './components/Authorization/Authorization';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Fragment } from 'react';

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="app-wrapper-content">
          <Switch>
            <Route path='/profile' component={Authorization} />
            <Fragment>
              <Header />
              <Route path='/' exact component={Content} />
              <Route path='/allmovies' component={Movies} />
              <Route path='/watchlist' component={Watchlist} />
              <Route path='/checklist' component={Checklist} />
              <Route path='/genres/:id' component={Genre} />
              <Route path='/actors/:id' component={Actor} />
              <Route path='/movies/:id' component={Movie} />
              <Footer />
            </Fragment>
          </Switch>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
