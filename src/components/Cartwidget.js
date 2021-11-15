import React from 'react'
import {Link} from 'react-router-dom'
import { useCartContext } from '..//context/CartContext'


export const CartWidget = ({ }) => {
  
  const {contadorCarrito} = useCartContext()

  return (
    
    <div className={contadorCarrito >0 ? 'mostrar':'ocultar'}> 
      <Link to="/cart" >
          <a href="..."><img src='../assets/imagen/carrito.png' className=" imagenLogo2" />{contadorCarrito}</a>
          {/* <span class="badge badge-warning" id={contadorCarrito}> 0 </span> */}
          <i className="fas fa-shopping-cart"></i>
       </Link>
    </div> 
  )
}