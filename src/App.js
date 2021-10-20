import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import Publicidad, { NombreLogo } from './components/Publicidad';
import Productos from './components/Productos';
import Cards from './components/Cards';



function App() {
  return (
    <div className="App">
      <Publicidad />
      <NombreLogo />
      <NavBar />                                                {/*llamo a la barra de menu */}
      <Productos />
      <div className="">
        <Cards/>
      </div>

    </div>
  );
}

export default App;
