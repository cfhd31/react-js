const NavBar = () => {
    return(
        <div>
            <nav className="menuFijo">                
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
            </nav>
        </div>
    )
}
export default NavBar