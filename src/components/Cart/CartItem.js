import React from 'react'
import { useCartContext } from '../../context/CartContext'

export default function CartItem(prodCart) {
    const {borrarItem} = useCartContext()

    
    return (
        <tr className="">
            <td><img className="imagen img-fluid" src={prodCart.productos.prod.imagen} alt={prodCart.productos.prod.tipo}/></td>
            <th>{prodCart.productos.prod.nombre}</th>
            <td><p>x{prodCart.productos.cantidad}</p></td>
            <td><p>{prodCart.productos.prod.precio}M Isk</p></td>
            <td><p>{prodCart.productos.cantidad * prodCart.productos.prod.precio}M Isk</p></td>
            <td>
                <i className="bi bi-trash-fill" onClick= {() => borrarItem(prodCart.productos.prod.id)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z"/>
                    </svg>
                </i>
            </td>
        </tr>
    )
}
