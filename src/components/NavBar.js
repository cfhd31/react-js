const NavBar = () => {
    return(
        <header>
        <div>
            <nav className="navbar navbar-expand-lg navbar-light sticky-top menu menu--fondo ">       
        <div className="header__centrado">        
        <img src='../assets/imagen/eve0.png' />
            {/* <a href=".."><img alt="Logo" src="../img/eve0.png"  title="Logo" className=" imagenLogo2"></a> */}
        </div>
        
        <button className="navbar-toggler espacio" data-toggle="collapse"  data-bs-toggle="collapse" type="button" data-bs-target="#collapse_target" aria-controls="collapse_target" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>
     
        <div className="collapse navbar-collapse  menu--fondo " id="collapse_target">
            <ul className="navbar-nav">
                <li className="nav-item menuEspacio">
                    <a href="../index.html"   className="menuMin"> INICIO</a>
                </li>
                <li className="nav-item menuEspacio">
                    <a href="alianza.html"      className="menuMin"> ALIANZA</a>
                </li>
                <li className="nav-item menuEspacio">
                    <a href="comercio.html"    className="menuMin"> COMERCIO</a>
                </li>
                <li className="nav-item menuEspacio">
                    <a href="contacto.html"   className="menuMin"> CONTACTO</a>
                </li>
                <li className="nav-item menuEspacio">
                    <a href="orientacion.html"    className="menuMin"> ORIENTACION</a>
                </li>
                <li className="nav-item menuEspacio">
                    <a href="reclutas.html" className="menuMin"> RECLUTA</a>
                </li>
            </ul>
        </div>
    </nav>
            {/* <nav className="menuFijo">                
                <ul className="Menu" >
                    <li className="m1"><a href="##"> INICIO      </a></li>
                    <li className="m2"><a href="##"> ESTRUCTURAS </a></li>
                    <li className="m5"><a href="##"> NAVES       </a>
                        <ul>
                            <a href="##"><li className="m8">FRAGATAS            </li></a>
                            <a href="##"><li className="m8">DESTRUCTORES        </li></a>
                            <a href="##"><li className="m8">CRUCEROS            </li></a>
                            <a href="##"><li className="m8">CRUCEROS DE BATALLA </li></a>
                            <a href="##"><li className="m8">ACORAZADOS          </li></a>
                            <a href="##"><li className="m8">INDUSTRIALES        </li></a>
                        </ul>
                    </li>
                    <li className="m5"><a href="##"> PLANOS </a>
                        <ul>
                            <a href="##"><li className="m8">FRAGATAS            </li></a>
                            <a href="##"><li className="m8">DESTRUCTORES        </li></a>
                            <a href="##"><li className="m8">CRUCEROS            </li></a>
                            <a href="##"><li className="m8">CRUCEROS DE BATALLA </li></a>
                            <a href="##"><li className="m8">ACORAZADOS          </li></a>
                            <a href="##"><li className="m8">INDUSTRIALES        </li></a>
                        </ul>
                    </li>
                    <li className="m4"><a href="##"> MENA       </a></li>
                </ul>
            </nav> */}
        </div>
        </header>
    )
}
export default NavBar