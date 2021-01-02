import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import Movies from './components/Movies/Movies';
import { BrowserRouter, Route } from 'react-router-dom';

const App = (props) => {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/main' render={ () => <Header titlesPopular={props.titlesPopular} />}/>
          <Route path='/allmovies' component={ Movies } />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
    
  );
}

export default App;
