import {useState} from 'react'
import {useCartContext} from '../../context/CartContext'
import CartItem from './CartItem'
import {Link} from "react-router-dom"
import {getFirestore} from '../../services/getFirestore'
import firebase from "firebase"
import 'firebase/firestore'
import './cart.css'

export default function Cart() {
    const {cartList, borrarTodo } = useCartContext()
    const [orderId, setOrderId] = useState("")
    const [messageErr, setmessageErr] = useState("")
    const [formData, setFormData] = useState({name: '', phone: '', email: ''})

    const generarOrden = (e) =>{
        e.preventDefault()

        let orden = {}
        orden.date = firebase.firestore.Timestamp.fromDate(new Date())
        orden.buyer = formData
        orden.total = {precioTotal}; // estaba {precioTotal}
        orden.state = "Generado"
        orden.items = cartList.map(cartItem => {
            const id = cartItem.prod.id;
            const nombre = cartItem.prod.nombre;
            const cantidad = cartItem.cantidad;
            const precio = cartItem.prod.precio * cartItem.cantidad
            return {id, nombre, precio, cantidad}
        })

        
		const dbQuery = getFirestore()
		dbQuery
			.collection("orders").add(orden)
			.then((resp) => setOrderId(resp.id))
			.catch((err) => setmessageErr(err))
			.finally(() => setFormData({ name: "", phone: "", email: "", email2:"", comentario:""}),
            alert("Su pedido fue enviado"),
                borrarTodo()
            )
         

        const itemsToUpdate = dbQuery.collection('items').where(
            firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i=> i.prod.id)
        )
        const batch = dbQuery.batch();

        itemsToUpdate.get()
        .then(collection =>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cartList.find(items => items.prod.id === docSnapshot.id).cantidad
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
    

    const precioTotal = cartList.reduce((prev, next) => prev + (next.cantidad*next.prod.precio), 0)
    var condition = !cartList?.length
    if (condition !== true) {
        return (
            <div className="container">
                <div className="row">
                    <div className="contenedorTabla listaContenedor flex-start" >
                        <div className="listaCarrito">
                            <h2>Lista de compras</h2>
                            <table className="react-reveal mb-5 table table-dark table-striped">
                                <thead>
                                    <tr className="tabraTitulo table-dark">
                                        <th>  Foto  </th>
                                        <th>  Nave  </th>
                                        <th>  Cantidad  </th>
                                        <th>  Precio por unidad  </th>
                                        <th>   Subtotal    </th>
                                        <th></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {cartList.map(prodCart => <CartItem key={prodCart.prod.id} productos={prodCart}/>)}
                                </tbody>
                            </table>
                            <div className="">
                                <h6> Importe total a pagar: {precioTotal}M Isk</h6>
                                <div className="container">
                                    <div className="d-flex justify-content-around">
                                        <div>
                                            <Link to={`/`} className=" "><button type="submit">Seguir comprando</button></Link>
                                        </div>
                                        <div>
                                            <button type="alerta" onClick= {() => borrarTodo()}>Vaciar Carrito</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="formu">
                        <form id="contact" onSubmit={generarOrden} onChange={handleChange} method="post">
                            <h3>Complete el formulario para finalizar compra</h3>
                            <fieldset>
                                <input placeholder="Nick del Piloto" name="name"  type="text" tabindex="1" required autofocus value={formData.name}/>
                            </fieldset>
                            <fieldset>
                                <input placeholder="Numero de telefono" name="phone"   type="tel" tabindex="2" min="6" max="50" required value={formData.phone}/>
                            </fieldset>
                            <fieldset>
                                <input placeholder="Email" name="email" type="email" tabindex="3" required value={formData.email}/>
                            </fieldset>
                            <fieldset>
                                <input placeholder="Vuelva a ingresar el Email" name="email2" type="email" tabindex="4" required value={formData.email2}/>
                            </fieldset>
                            <fieldset>
                                <textarea placeholder="Algun comentario que nos quiera dejar?" name="comentario" type="text" tabindex="5" value={formData.comentario}></textarea>
                            </fieldset>
                            <p>
                                <input type="checkbox" name="terminos" value="1" required />
                                Acepta términos y condiciones
                            </p>

                            <fieldset>
                                <button disabled={formData.email!==formData.email2 ? true : false} name="Enviar" type="submit" id="contact-submit" data-submit="...Sending" variant="success">Generar Orden</button>
                                <p className="copyright">volver a<Link to={`/`} className="waves-effect waves-light btn"><h5>Inicio</h5></Link></p>
                            </fieldset>  
                        </form>
                    </div>
                </div>
            </div>
        )
    } 

    return(
        <div className="container">
            <br />
            <h2>Tu carrito está vacío</h2> 
            <Link to = {`/`} className = "waves-effect waves-light btn"> <a>Ir a Inicio </a></Link>
        </div>
    )
}
