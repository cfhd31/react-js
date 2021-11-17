import React from 'react'
import { useCartContext } from '../../context/CartContext'

export default function CartItem(prodCart) {
    const {cartList, borrarItem} = useCartContext()
    console.log(prodCart)
    return (
        
        // <tr>
        //     <td><img src={prodCart.productos.prod.imagen} alt={prodCart.productos.prod.tipo}/></td>
        //     <td><span>{`${prodCart.productos.prod.nombre}`}</span></td>
        //     <td><p>{prodCart.productos.prod.precio}M ISK</p></td>
        //      <td><p>x{prodCart.productos.cantidad}</p></td>
        //     <td><button onClick= {() => borrarItem(prodCart.productos.prod.id)}>Eliminar</button></td>
        // </tr>
        <tr className="filaTabla">
            <td><img className="imagen" src={prodCart.productos.prod.imagen} alt={prodCart.productos.prod.tipo}/></td>
            <td><strong>{prodCart.productos.prod.nombre}</strong></td>
            <td><p>x{prodCart.productos.cantidad}</p></td>
            <td><p>{prodCart.productos.prod.precio}M Isk</p></td>
            <td><p>{prodCart.productos.cantidad * prodCart.productos.prod.precio}M Isk</p></td>
            <td><button onClick= {() => borrarItem(prodCart.productos.prod.id)}>Eliminar</button></td>
        </tr>
    )
}
