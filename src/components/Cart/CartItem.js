import React from 'react'

export default function CartItem(prodCart) {
    console.log(prodCart)
    return (
        <div>
            <tr>
                <td>
                    <img src={prodCart.productos.prod.imagen} alt={prodCart.productos.prod.tipo}/>
                </td>

                <td>
                    <span>{`${prodCart.productos.prod.nombre}`}</span>
                </td>
                <td>
                     <p>{prodCart.productos.prod.precio}</p>
                </td>
                <td>
                    <p>x{prodCart.productos.cantidad}</p>
                </td>
            </tr>
        </div>
    )
}
