import logo from './logo.svg';
import './App.css';

import NavBar from './components/NavBar';
import Publicidad, { NombreLogo } from './components/Publicidad';
import Productos from './components/Productos';
import CardList from './components/CardListContainer/CardList/CardList';



function App() {
  return (
    <div className="App">
      <Publicidad />
      <NombreLogo />
      <NavBar />                                                {/*llamo a la barra de menu */}
      <Productos />
      <div className="">
        <CardList/>
      </div>

    </div>
  );
}

export default App;
