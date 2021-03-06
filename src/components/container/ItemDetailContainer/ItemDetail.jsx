import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import { useCartContext } from '../../../context/CartContext'
import ItemCount from '../../Item/itemCount'
import './itemDetail.css'

const ItemDetail = ({prod}) => {
    const [inputType, setInputType] = useState('input')
    const { agregarAlCarrito} = useCartContext()
    
    const onAdd = (count) => {
        agregarAlCarrito({ ...prod, cantidad: count })
        setInputType('button')
    }
    
    return (
        <div className="ItemDetail">
            <div className="react-reveal card-detalle efecto bg-dark text-light" >
                <h4 className="card-title text-danger font-weight-bold ">{prod.tipo}</h4>
                <div className="padding10">
                    <img src={prod.imagen} className=" card-img-top img-fluid" loading="lazy" alt="nave" />
                </div>
                <div className="card-body">
                    <h5 className="card-title"><strong>Nave:</strong> {prod.nombre}</h5>
                    <p className="card-text"><strong>Precio:</strong> {prod.precio}M ISK</p>
                    <p className="card-text"><strong>Descripcion:</strong> {prod.descripcion}</p>
                    <p className="card-text"><strong>Stock:</strong> {prod.stock}</p>
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
