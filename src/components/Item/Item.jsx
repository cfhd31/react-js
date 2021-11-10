import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import ItemCount from '../../components/Item/itemCount'
import './item.css'
const Item = ({prod}) => {

    const onAdd = (count) => {

        alert("Se agregó " + count + " " + prod.nombre)
      }
    
    return (
        /*<div className="col-md-3 col-sm-4 col-xs-6" >
            <div className="card bg-dark text-center espacioAbajo ">
                <h4 className=" ">{prod.tipo}</h4>
                <img src={prod.imagen} className="card-img-top " />
                <div className="card-body ">
                    <h5 className=" ">Nave: {prod.nombre}</h5>
                    <p className="text-secundary">Precio: {prod.precio} ISK</p>
                
                    <Link to={`/detalle/${prod.id}`} className="text-primary">
                        <p>Ver detalle de la nave...</p>
                    </Link>
                    <div>
                        <ItemCount  initial="1" stock={prod.stock} onAdd={onAdd}/>
                    </div>
                </div>
            </div>
        </div>*/
        <div className="catalogo">
            <div className="react-reveal card efecto bg-dark">
            <h4 className="card-title">{prod.tipo}</h4>
            <img src={prod.imagen} className="card-img-top " />
                <div className="card-body">
                <h5 className="card-title">Nave: {prod.nombre}</h5>
                    <div className="card-text">
                        <p className="text-secundary"> <strong>Precio:</strong> {prod.precio}M ISK</p>
                        <Link to={`/detalle/${prod.id}`} className="text-primary">
                            <p>Ver detalle de la nave...</p>
                        </Link>
                        <div>
                            <ItemCount  initial="1" stock={prod.stock} onAdd={onAdd}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
