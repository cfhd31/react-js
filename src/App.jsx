import {BrowserRouter , Switch, Route} from 'react-router-dom'
import ItemListContainer from "./components/container/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/container/ItemDetailContainer/ItemDetailContainer";
import { NavBar } from './components/NavBar';
import Cart from './components/Cart/Cart';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Publicidad from './components/publicidad/Publicidad';
const App = () => {   
  
    return (        
        <div className="App"  >
            <BrowserRouter>
                <Publicidad/>
                <NavBar />
                
                <Switch>
                    <Route exact path='/'>
                        <ItemListContainer  /> 
                    </Route>
                    <Route path='/categoria/:id' exact component={ItemListContainer} />                    
                    <Route exact path='/detalle/:id' component={ItemDetailContainer} />                    
                    <Route exact path='/cart' component={Cart} />                    
                </Switch>
            </BrowserRouter>          
        </div>        
    )
}

export default App;