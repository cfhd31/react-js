import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import { useCartContext } from '../../../context/CartContext'
import ItemCount from '../../Item/itemCount'
import './itemDetail.css'

const ItemDetail = ({prod}) => {
    const[count, setCount] = useState(0)
    /*const { cartList, mostrarListado, agregarAlCarrito} = useCartContext()*/

    const [inputType, setInputType] = useState('input')
      const onAdd = (count) => {
        setInputType('button')
        alert("Se agregó " + count + ' ' + prod.nombre)
      }

    
    return (

        // <div className="card text-center bg-dark col-md-6 container-fluid " >
        //     <h4 className="card-title text-danger font-weight-bold ">{prod.tipo}</h4>
        //     <img src={prod.imagen} className=" imagenLogo2" />
        //     <div className="card-body text-light">
        //         <h5 className="card-title">Nave: {prod.nombre}</h5>
        //         <p className="card-text text-secundary">Precio: {prod.precio} ISK</p>
        //     </div>
        //     <div className="text-light">
        //         <p>{prod.descripcion}</p>
        //     </div>
        //     <div>
        //         {/* <div className="text-light">
        //             <ItemCount stock={prod.stock} initial="1" onAdd={onAdd}/>
        //         </div> 
        //         <Link to={`/`} className="text-primary">
        //             <button className="btn btn-outline-primary btn-block">
        //                 Volver
        //             </button>
        //         </Link>*/}
        //         <div onClick={()=>onAdd}>
        //             {
        //                 inputType === 'input'?
        //                 <ItemCount stock={prod.stock} initial="1" onAdd={onAdd}/>
        //                 :
        //                 <Link to="/cart" className="pretext botonComprar">Ir al Carrito</Link>  
        //             }
        //         </div>
        //     </div>
        // </div>
        <div>
            <div className="react-reveal card-detalle efecto bg-dark text-light" >
            <h4 className="card-title text-danger font-weight-bold ">{prod.tipo}</h4>
            <img src={prod.imagen} className=" card-img-top" loading="lazy" />
                <div className="card-body">
                    <h5 className="card-title"><strong>Nave:</strong> {prod.nombre}</h5>
                    <p className="card-text"><strong>Precio:</strong> {prod.precio}M ISK</p>
                    <p className="card-text"><strong>Descripcion:</strong> {prod.descripcion}</p>
                    <div>
                        <div onClick={()=>onAdd}>
                            {
                            inputType === 'input'?
                            <ItemCount stock={prod.stock} initial="1" onAdd={onAdd}/>
                            :
                            <Link to="/cart" className="pretext botonComprar">Ir al Carrito</Link>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ItemDetail
