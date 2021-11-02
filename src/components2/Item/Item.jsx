import React from 'react'
import {Link} from 'react-router-dom'
import ItemCount from '../../components/Card/ItemCount'
import './item.css'
const Item = ({prod}) => {
    return (
        <div className="col-md-3 col-sm-4 col-xs-6" >
            <div className="card bg-dark text-center espacioAbajo ">
                <h4 className=" ">{prod.tipo}</h4>
                <img src={prod.imagen} className=" " />
                <div className="card-body ">
                    <h5 className=" ">Nave: {prod.nombre}</h5>
                    <p className="text-secundary">Precio: {prod.precio}</p>
                
                    <Link to={`/detalle/${prod.id}`} className="text-primary">
                        <p>Ver detalle de la nave...</p>
                    </Link>
                    <div>
                        <ItemCount stock={prod.stock} nombre={prod.nombre} initial="1" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
