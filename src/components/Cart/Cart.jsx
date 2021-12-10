import {useState} from 'react'
import {useCartContext} from '../../context/CartContext'
import {Link} from "react-router-dom"
import {getFirestore} from '../../services/getFirestore'
import firebase from "firebase"
import CartItem from './CartItem'
import 'firebase/firestore'
import './cart.css'
import Formulario from './Formulario'

export default function Cart() {
    const {cartList, borrarTodo, formData, setFormData, precioTotal} = useCartContext()
    const [orderId, setOrderId] = useState("")
 
    const generarOrden = (e) =>{
        e.preventDefault()

        let orden = {}
        orden.date = firebase.firestore.Timestamp.fromDate(new Date())
        orden.buyer = formData
        orden.total = precioTotal(); 
        orden.state = "Generado"
        orden.items = cartList.map(cartItem => {
            const id = cartItem.id;
            const nombre = cartItem.nombre;
            const cantidad = cartItem.cantidad;
            const precio = cartItem.precio * cartItem.cantidad
            return {id, nombre, precio, cantidad}
        })

      
		const dbQuery = getFirestore()
		dbQuery
			.collection("orders").add(orden)
			.then((resp) => setOrderId(resp.id))
			.catch((err) => console.log(err))
			.finally(() => setFormData({ name: "", phone: "", email: "", email2:"", comentario:""}),
             borrarTodo()
            )
         
        const itemsToUpdate = dbQuery.collection('items').where(
            firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i=> i.id)
        )
        const batch = dbQuery.batch();

        itemsToUpdate.get()
        .then(collection =>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cartList.find(items => items.id === docSnapshot.id).cantidad
                })
            })
            batch.commit().catch((err) => console.log(err))
        })
    }

    const handleChange = (e) => {
        setFormData({
          ...formData, 
          [e.target.name]: e.target.value
      })
    }

    return (
        cartList.length?
        <div className="container">
            <div className="row contenedorListaOrden">
                <div className="contenedorTabla  " >
                    <div className="listaCarrito">
                        <h2>Lista de compras</h2>
                        <table className="react-reveal mb-5 table table-dark table-striped ">
                            <thead>
                                <tr className="tabraTitulo table-dark">
                                    <th>  Foto  </th>
                                    <th>  Nave  </th>
                                    <th>  Cantidad  </th>
                                    <th>  Precio por unidad  </th>
                                    <th>  Subtotal    </th>
                                    <th></th>
                                </tr>
                            </thead>
                            <tbody>
                                {cartList.map(prodCart => <CartItem key={prodCart.id} productos={prodCart}/>)}
                            </tbody>
                        </table>
                        <div className="">
                            <h6> Importe total a pagar: {precioTotal()} M Isk</h6>
                            <div className="container">
                                <div className="d-flex justify-content-around">
                                    <div>
                                        <Link to="/"><button type="submit">Seguir comprando</button></Link>
                                    </div>
                                    <div>
                                        <button type="alerta" onClick= {() => borrarTodo()}>Vaciar Carrito</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <Formulario envio={generarOrden} change={handleChange} />
            </div>
        </div>
        :
        <div>
            <div className="container vacioComprado">
                {orderId!==''?
                <div className="finalCompra">
                    <h3>Gracias por su compra</h3>
                    <h5>El id de su orden es : {orderId}</h5>
                </div>
                :
                <div className="">
                    <h2>Tu carrito está vacío</h2> 
                    <Link to ="/" className = "waves-effect waves-light btn"> Ir a Inicio </Link>
                </div>}
            </div>
        </div>
    )
}
