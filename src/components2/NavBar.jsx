import { Link, NavLink } from 'react-router-dom'
import { CartWidget } from '../components/Cartwidget'
import '../main.css'

export const NavBar = () => {   
    return(
        <header>
        <div>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top menu menu--fondo ">       
                <div className="header__centrado">        
                    <Link to="/"><img src='../assets/imagen/eve0.png' className=" imagenLogo2" /></Link>
                </div>
                
                 <button className="navbar-toggler espacio" data-toggle="collapse"  data-bs-toggle="collapse" type="button" data-bs-target="#collapse_target" aria-controls="collapse_target" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> 
            
                <div className="collapse navbar-collapse  menu--fondo " id="collapse_target">
                    <ul className="navbar-nav">
                        <li className="nav-item menuEspacio">
                            <Link to='/' className="menuMin"> INICIO</Link>
                        </li>
                        <li className="nav-item menuEspacio">
                            <Link to='/categoria/Fragata' className="menuMin"> FRAGATAS</Link>
                        </li>
                        <li className="nav-item menuEspacio">
                            <Link to='/categoria/Destructor' className="menuMin"> DESTRUCTORES</Link>
                        </li>
                        <li className="nav-item menuEspacio">
                            <Link to='/categoria/Crucero' className="menuMin"> CRUCEROS</Link>
                        </li>
                        <li className="nav-item menuEspacio">
                            <Link to='/categoria/C. de Batalla' className="menuMin"> C. DE BATALLA</Link>
                        </li>
                        <li className="nav-item menuEspacio">
                            <Link to='/categoria/Acorazado' className="menuMin"> ACORAZADOS</Link>
                        </li>
                    </ul>
                    
<CartWidget />
                    

             

                </div>
            </nav>
        </div>
    </header>
        
    )
}
