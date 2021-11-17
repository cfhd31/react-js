import React from 'react'
import {Link} from 'react-router-dom'
import { useCartContext } from '..//context/CartContext'


export const CartWidget = ({ }) => {
  
  const {contadorCarrito} = useCartContext()

  return (
    
    <div className={contadorCarrito >0 ? 'mostrar':'ocultar'}> 
      <Link to="/cart" >
          <img src='../assets/imagen/carrito.png' className=" imagenLogo2" />
         <span className="badge">{contadorCarrito}  </span> 
          <i className="fas fa-shopping-cart"></i>
       </Link>
    </div> 
  )
}