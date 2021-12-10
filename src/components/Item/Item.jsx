import React from 'react'
import {Link} from 'react-router-dom'
import './item.css'

const Item = ({prod}) => {

  
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
                          :
                            <Link to={`/detalle/${prod.id}`} className="text-primary ">
                                <button className="buttonDetalle">Detalle</button>
                            </Link>
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Item
