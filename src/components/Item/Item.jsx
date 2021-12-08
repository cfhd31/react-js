import React from 'react'
import { useState } from 'react'

import {Link} from 'react-router-dom'
/* import ItemCount from '../../components/Item/itemCount'
import { useCartContext } from '../../context/CartContext' */
import './item.css'

const Item = ({prod}) => {
 /*    const[count, setCount] = useState(1) */
    const [inputType, setInputType] = useState('input')
    // const {agregarAlCarrito} = useCartContext()

/*     const onAdd = (count) => {
        setInputType('button')
        setCount(count)
        agregarAlCarrito({prod, cantidad: count})
    } */
    
  /*   if (prod.stock <= 0) {
        return (
            <div className="catalogo">
                <div className="react-reveal card bg-dark">
                <h4 className="card-title">{prod.tipo}</h4>
                <div className=" overflow">
                    <img src={prod.imagen} className="card-img-top img-fluid" alt="Foto de nave" />
                </div>
                    <div className="card-body">
                    <h5 className="card-title">Nave: {prod.nombre}</h5>
                        <div className="card-text">
                            <p className="text-secundary"> <strong>Precio:</strong> {prod.precio}M ISK</p>
                            <Link to={`/detalle/${prod.id}`} className="text-primary">
                                <button>Detalle</button>
                            </Link>
                            <div className="fw-bold text-danger">
                                <h4>Sin Stock</h4>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    } */
    return (
        <div className="catalogo">
            <div className="react-reveal card bg-dark">
                <h4 className="card-title">{prod.tipo}</h4>
                <div className="overflow">
                    <img src={prod.imagen} className="card-img-top img-fluid" alt="Foto de nave" />
                </div>
                <div className="card-body">
                    <h5 className="card-title">Nave: {prod.nombre}</h5>
                    <div className="card-text">
                        <p className="text-secundary"> <strong>Precio:</strong> {prod.precio}M ISK</p>

                       
                        { prod.stock <= 0?
                          <h4>Sin Stock</h4>
                          :<Link to={`/detalle/${prod.id}`} className="text-primary">
                            <button>Detalle</button>
                            </Link>
                        }
                        <div>
                            {/* <div onClick={()=>onAdd}>
                                {
                                    inputType === 'input'?
                                    <ItemCount stock={prod.stock} initial="1" onAdd={onAdd}/>
                                    :
                                    <Link to="/cart" className="pretext botonComprar">Ir al Carrito</Link>
                                }

                                
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
