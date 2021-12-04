import {useState} from 'react'
import {useCartContext} from '../../context/CartContext'
import CartItem from './CartItem'
import {Link} from "react-router-dom"
import {getFirestore} from '../../services/getFirestore'
import firebase from "firebase"
import 'firebase/firestore'
import './cart.css'

export default function Cart() {
    const {cartList, borrarTodo, borrarItem, } = useCartContext()
    const [idOrder, setIdOrder] = useState('')

    const [formData, setFormData] = useState({nombre: '', telefono: '', email: ''})

    const generarOrden = (e) =>{
        e.preventDefault()

        let orden = {}
        orden.date = firebase.firestore.Timestamp.fromDate(new Date())
        .firestore
        .Timestamp
        .fromDate(new Date());
        orden.buyer = formData
        orden.total = {precioTotal};
        orden.items = cartList.map(cartItem => {
            const id = cartItem.prod.id;
            const nombre = cartItem.prod.nombre;
            const precio = cartItem.prod.price * cartItem.cantidad
            console.log(cartItem)
            return {id, nombre, precio}
        })

        const dbQuery = getFirestore()

        dbQuery.collection('orders').add(orden) //subo al firestore la orden
        .then(resp => setIdOrder(resp.id))
        .catch(err=> console.log(err))
        .finally(()=> setFormData({
            nombre:'',
            telefono:'',
            email:''
        }))

        const itemsToUpdate = dbQuery.collection('items').where(
            firebase.firestore.FieldPath.documentId(), 'in', cartList.map(i=> i.id)
        )
    
        const batch = dbQuery.batch();

        itemsToUpdate.get()
        .then( collection=>{
            collection.docs.forEach(docSnapshot => {
                batch.update(docSnapshot.ref, {
                    stock: docSnapshot.data().stock - cartList.find(item => item.id === docSnapshot.id).cantidad
                })
            })
    
            batch.commit().then(res =>{
                console.log('resultado batch:', res)
            })
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
                                    {/* <tr>
                                        <td></td>
                                        <td></td>
                                        <td></td>
                                        <td><strong>Importe total a pagar:</strong></td>
                                        <td>${precioTotal}M Isk</td>
                                        <td> <button onClick= {() => borrarTodo()}>Vaciar Carrito</button></td>
                                    </tr> */}
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
                                <input placeholder="Nick del Piloto" name="nombre" type="text" tabindex="1" required autofocus value={formData.nombre}/>
                            </fieldset>
                            <fieldset>
                                <input placeholder="Numero de telefono" name="telefono" type="tel" tabindex="2" required value={formData.telefono}/>
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
                                <input type="checkbox" name="acepta" value="1" required />
                                Acepta términos y condiciones
                            </p>

                            {formData.email !== "" && formData.email === formData.email2 ? (
                                <fieldset>
                                    <button name="Enviar" type="submit" id="contact-submit" data-submit="...Sending" variant="success">Generar Orden</button>
                                    <p className="copyright">volver a<Link to={`/`} className="waves-effect waves-light btn"><h5>Inicio</h5></Link></p>
                                </fieldset>
                            ) : (
                                <></>
                            )} 
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
