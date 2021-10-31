import React from 'react'
import ItemCount from './Card/ItemCount'


export const CartWidget = () => {
  
  return (
    
    <div className=""> 
      <a href="..."><img src='../assets/imagen/carrito.png' className=" imagenLogo2" /></a>
      <i className="fas fa-shopping-cart"></i>
      <span className="" id="cartCount"> {  } </span>
    </div> 
  )
}