import React from 'react'
import { useCartContext } from '../../context/CartContext'
import CartItem from './CartItem'
import {Link} from "react-router-dom"
import './cart.css'




export default function Cart() {
    const {cartList, borrarTodo, borrarItem, PrecioTotal} = useCartContext()
/*
const generarOrden = (e) =>{
    e.preventDefault()
    let orden = {}
    orden.date = firebase.firestore.Timestamp.fromDate(new Date());
    orden.buyer = fromData 
    orden.total = precioTotal();
    orden.items = cartList.map(CartItem => {
        const id= cartItem.item.id;
        const nombre = cartItem.item.nombre;
        const precio = cartItem.item,precio * cartItem.cantidad;
        return {id, nombre, precio}
        })
}
*/

    var condition = !cartList?.length
    if (condition !== true) {
        return (
            // <div className="container">
            //     <div className="row">
            //         <table>
            //             <tr>
            //                 <td><strong>Imagen</strong></td>
            //                 <td><strong>Producto</strong></td>
            //                 <td><strong>Precio</strong></td>
            //                 <td><strong>Unidad</strong></td>
            //                 <td></td>
            //             </tr>
            //                 {cartList.map(prodCart => <CartItem key={prodCart.prod.id} productos={prodCart}/>)}
            //             <tr>
            //                 <td/>
            //                 <td/>
            //                 <td>${PrecioTotal}</td>
            //                 <td>Cantidad de Unidades</td>
            //                 <td/>
            //             </tr>
            //         </table>
            //     <button onClick= {() => borrarTodo()}>Vaciar Carrito</button>
            //     </div>
            // </div>
            <div>
                <div className="contenedorTabla">
                    <div className="listaCarrito">
                        <table className="react-reveal mb-5">
                            <tr className="tabraTitulo">
                                <th>  Foto  </th>
                                <th>  Nave  </th>
                                <th>  Cantidad  </th>
                                <th>  Precio por unidad  </th>
                                <th>   Subtotal    </th>
                                <th></th>
                            </tr>
                            {cartList.map(prodCart => <CartItem key={prodCart.prod.id} productos={prodCart}/>)}
                            <tr>
                                <td/>
                                <td/>
                                <td/>
                                <td><strong>Importe total a pagar:</strong></td>
                                <td>{PrecioTotal}M Isk</td>
                                <td> <button onClick= {() => borrarTodo()}>Vaciar Carrito</button></td>
                            </tr>
                        </table>
                        <h6>Importe total a pagar: {PrecioTotal}M Isk</h6>
                        <button onClick= {() => borrarTodo()}>Vaciar Carrito</button>
                    </div>
                </div>
                <div>
                    <form action="" className="form">
                        <label> Completa el formulario </label>
                        <input type="text" required placeholder="Nombre del Piloto" name="nombre" />
                        <input type="text" required placeholder="Numero de telefono" name="whatsapp" />
                        <input type="text" required placeholder="Discord" name="discord" />
                        <input type="text" placeholder="Mail" name="mail" />
                        <button > Generar Orden </button>
                    </form>
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
