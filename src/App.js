import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import GamesContainer from './components/Games/Container/GamesContainer';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <GamesContainer />
      <Footer />
    </div>
  );
}

export default App;
