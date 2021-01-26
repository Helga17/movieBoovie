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
import Registration from './components/Registration/Registration';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Fragment, useState, useEffect } from 'react';
import axios from 'axios';

const App = () => {
  const [user, setUser] = useState(null);

  const token = localStorage.getItem('passport') || '';

  const config = {
    headers: { Authorization: `Bearer ${token}` }
  }

  useEffect(() => {
    if (user === null && token.length > 0) {
      axios.get('http://127.0.0.1:8000/api/user', config)
        .then(result => {
          setUser(result.data);
        });
    }
  }, []);

  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <div className="app-wrapper-content">
          <Switch>
            <Route path='/login' render={() => <Authorization setUser={setUser}/>} />
            <Route path='/register' render={() => <Registration setUser={setUser}/>}/>
            <Fragment>
              <Header currentUser={user} setUser={setUser}/>
              <Route path='/' exact component={Content} />
              <Route path='/allmovies' component={Movies} />
              <Route path='/watchlist' component={Watchlist} />
              <Route path='/checklist' component={Checklist} />
              <Route path='/genres/:id' component={Genre} />
              <Route path='/actors/:id' component={Actor} />
              <Route path='/directors/:id' component={Actor} />
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
