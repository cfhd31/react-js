import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import ItemCount from '../../components/Item/itemCount'
import './item.css'
const Item = ({prod}) => {

    const onAdd = (count) => {

        console.log("Se agregó " + count + " " + prod.nombre)
      }
    
    return (
        <div className="col-md-3 col-sm-4 col-xs-6" >
            <div className="card bg-dark text-center espacioAbajo ">
                <h4 className=" ">{prod.tipo}</h4>
                <img src={prod.imagen} className=" " />
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
        </div>
    )
}

export default Item
