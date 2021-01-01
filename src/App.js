import './App.css';
import Header from './components/Header/Header';
import Cinema from './components/Cinema/Cinema';
import InfoBlock from './components/InfoBlock/InfoBlock';
import Navbar from './components/Navbar/Navbar';
import Populars from './components/Populars/Populars';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app-wrapper">
      <Navbar />
      <Header />
      <Populars />
      <InfoBlock />
      <Cinema />
      <Footer />
    </div>
  );
}

export default App;
