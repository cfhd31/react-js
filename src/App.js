import './App.css';
import NavBar from './components/NavBar';
import Publicidad, { NombreLogo } from './components/Publicidad';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemListContainer from './components/Card/ItemListContainer';
import { navesList } from './services/GetFetch';


function App() {
  return (
    <div className="App">
      <Publicidad />
      <NombreLogo />
      <NavBar />         
      
      <div className="row align-items-start">
        
        {navesList.map( nave => (
          <ItemListContainer
          key={nave.id}
          nombre={nave.nombre}
          precio={nave.precio}
          tipo={nave.tipo}
          imagen={nave.imagen}
          stock={nave.stock}
          />
        ))}
      </div>

    </div>
  );
}

export default App;
