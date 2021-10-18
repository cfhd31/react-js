import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar';
import Logo, { NombreLogo } from './components/Logo';
import Productos from './components/Productos';


function App() {
  return (
    <div className="App">
      <Logo />
      <NombreLogo />
      <NavBar />                                                {/*llamo a la barra de menu */}
      <Productos />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
           <code>src/App.js</code> abrir npm start :D
        </p>
        <a className="App-link" href="https://reactjs.org" target="_blank" rel="noopener noreferrer">
          very dificult.....
        </a>
      </header>
    </div>
  );
}

export default App;
