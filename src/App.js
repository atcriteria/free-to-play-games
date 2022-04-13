import './App.css';
import Header from './components/Header/Header';
import Nav from './components/Nav/Nav';
import GamesContainer from './components/Games/Container/GamesContainer';

function App() {
  return (
    <div className="App">
      <Header />
      <Nav />
      <GamesContainer />
    </div>
  );
}

export default App;
