import React from 'react'
import {Link} from 'react-router-dom'


export const CartWidget = ({ }) => {
  
  return (
    
    <div className=""> 
      <Link to={`/cart `} >
          <a href="..."><img src='../assets/imagen/carrito.png' className=" imagenLogo2" /></a>
          <i className="fas fa-shopping-cart"></i>
       </Link>
    </div> 
  )
}