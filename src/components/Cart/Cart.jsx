import React from 'react'
import { useCartContext } from '../../context/CartContext'
import CartItem from './CartItem'
import {Link} from "react-router-dom"

export default function Cart() {
    const {cartList, borrarTodo, borrarItem, PrecioTotal} = useCartContext()

    var condition = !cartList?.length
  
    if (condition !== true) {
        return (
            <div className="container">
                <div className="row">
                    <table>
                        <tr>
                            <td>
                                <strong>Imagen</strong>
                            </td>
                            <td>
                                <strong>Producto</strong>
                            </td>
                            <td>
                                <strong>Precio</strong>
                            </td>
                            <td>
                                <strong>Unidad</strong>
                            </td>
                            <td>
                            </td>
                        </tr>
                            {cartList.map(prodCart => <CartItem key={prodCart.prod.id} productos={prodCart}/>)}
                        <tr>
                            <td/>
                            <td/>
                            <td>
                            ${PrecioTotal}
                            </td>
                            <td>
                                Cantidad de Unidades
                            </td>
                            <td/>
                        </tr>
                    </table>
                <button onClick= {() => borrarTodo()}>Vaciar Carrito</button>
                </div>
            </div>
        )
    } 
    return(
        <div className="container">
            <br />
            <h2>Tu carrito está vacío</h2> 
            <Link to = {`/`} className = "waves-effect waves-light btn"> <h5>Ir a Inicio </h5></Link>
            
          
        </div>
    )
}
