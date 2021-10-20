import Card from './Card'

const NavBar = () => {
    return(
        <header>
            <div>
                <nav className="navbar navbar-expand-lg navbar-light sticky-top menu menu--fondo ">       
                    <div className="header__centrado">        
                        <a href="..."><img src='../assets/imagen/eve0.png' className=" imagenLogo2" /></a>
                    </div>
                    
                    <button className="navbar-toggler espacio" data-toggle="collapse"  data-bs-toggle="collapse" type="button" data-bs-target="#collapse_target" aria-controls="collapse_target" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                
                    <div className="collapse navbar-collapse  menu--fondo " id="collapse_target">
                        <ul className="navbar-nav">
                            <li className="nav-item menuEspacio">
                                <a href="..." className="menuMin"> INICIO</a>
                            </li>
                            <li className="nav-item menuEspacio">
                                <a href="..." className="menuMin"> FRAGATAS</a>
                            </li>
                            <li className="nav-item menuEspacio">
                                <a href="..." className="menuMin"> DESTRUCTORES</a>
                            </li>
                            <li className="nav-item menuEspacio">
                                <a href="..." className="menuMin"> CRUCEROS</a>
                            </li>
                            <li className="nav-item menuEspacio">
                                <a href="..." className="menuMin"> C. DE BATALLA</a>
                            </li>
                            <li className="nav-item menuEspacio">
                                <a href="..." className="menuMin"> ACORAZADOS</a>
                            </li>
                        </ul>
                        <a href="..."><img src='../assets/imagen/carrito.png' className=" imagenLogo2" /></a>

                        <div className=""> 
                            <i class="fas fa-shopping-cart"></i>
                            <span class="" id="cartCount"> { /*countCards quiero llamar al contadorCards de Card */ } </span>
                        </div> 

                    </div>
                </nav>
            </div>
        </header>
    )
}
export default NavBar