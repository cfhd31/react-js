import React from 'react'
import { useState } from 'react'

import {Link} from 'react-router-dom'
import ItemCount from '../../components/Item/itemCount'
import { useCartContext } from '../../context/CartContext'
import './item.css'

const Item = ({prod}) => {
    const[ count, setCount] = useState(1)
    const [inputType, setInputType] = useState('input')
    const { cartList, mostrarListado, agregarAlCarrito} = useCartContext()

    //console.log(cartList);
    //console.log(mostrarListado);

    const onAdd = (count) => {
        setInputType('button')
        setCount(count)
        agregarAlCarrito({prod, cantidad: count})
    }
    
    return (
        <div className="catalogo">
            <div className="react-reveal card efecto bg-dark">
            <h4 className="card-title">{prod.tipo}</h4>
            <img src={prod.imagen} className="card-img-top img-fluid" />
                <div className="card-body">
                <h5 className="card-title">Nave: {prod.nombre}</h5>
                    <div className="card-text">
                        <p className="text-secundary"> <strong>Precio:</strong> {prod.precio}M ISK</p>
                        <Link to={`/detalle/${prod.id}`} className="text-primary">
                            <p>Ver detalle de la nave...</p>
                        </Link>
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
        </div>
    )
}

export default Item
