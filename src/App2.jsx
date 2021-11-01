import {BrowserRouter , Switch, Route} from 'react-router-dom'
import ItemListContainer from "./components2/container/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components2/container/ItemDetailContainer/ItemDetailContainer";
import { NavBar } from './components2/NavBar';
import Cart from './components2/Cart/Cart';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
const App2 = () => {   
  
    return (        
        <div className="App"  >
            <BrowserRouter>
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

export default App2;