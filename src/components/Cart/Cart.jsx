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

    const [formData, setFormData] = useState({nombre: '', telefono: '', email: ''})

    const generarOrden = (e) =>{
        e.preventDefault()

        let orden = {}
        orden.date = firebase.firebase.Timestamp.fromDate(new Date())
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
        .then(resp => console.log(resp))
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
            <div>
                <div className="contenedorTabla listaContenedor" >
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
                                <td></td>
                                <td></td>
                                <td></td>
                                <td><strong>Importe total a pagar:</strong></td>
                                <td>${precioTotal}M Isk</td>
                                <td> <button onClick= {() => borrarTodo()}>Vaciar Carrito</button></td>
                            </tr>
                        </table>
                        <h6> Importe total a pagar: {precioTotal}M Isk</h6>
                        <button onClick= {() => borrarTodo()}>Vaciar Carrito</button>
                    </div>
                </div>
                <div className="formu">
                    {/* <form action="" className="form">
                        <label> Completa el formulario </label>
                        <input type="text" required placeholder="Nombre del Piloto" name="nombre" />
                        <input type="text" required placeholder="Numero de telefono" name="whatsapp" />
                        <input type="text" required placeholder="Discord" name="discord" />
                        <input type="text" placeholder="Mail" name="mail" />
                        <button  onClick= {() => generarOrden()}> Generar Orden </button>
                    </form> */}
                     {/* <form onSubmit={generarOrden} onChange={handleChange}> 
                        <input type="text" name="nombre" placeholder="nombre" value={formData.nombre}/>
                        <input type="text"name="telefono" placeholder="telefono"value={formData.telefono}/>
                        <input type="email" name="email" placeholder="email" value={formData.email}/>
                        <button>Enviar</button>
                    </form> */}

                        <form id="contact" onSubmit={generarOrden} onChange={handleChange} method="post">
                            <h3>Complete el formulario</h3>
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
                                <textarea placeholder="Algun comentario que nos quiera dejar?" tabindex="5" type="comentario" required value={formData.comentario}></textarea>
                            </fieldset>
                            <p>
                                <input type="checkbox" name="acepta" value="1" />
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
