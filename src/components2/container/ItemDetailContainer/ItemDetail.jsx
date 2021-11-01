import React from 'react'
import {Link} from 'react-router-dom'

const ItemDetail = ({prod}) => {
    return (
        <div className="card text-center bg-dark col-md-8 container-fluid" >
            <h4 className="card-title text-danger font-weight-bold ">{prod.tipo}</h4>
            <img src={prod.imagen} className=" imagenLogo2" />
            <div className="card-body text-light">
                <h5 className="card-title">Nave: {prod.nombre}</h5>
                <p className="card-text text-secundary">Precio: {prod.precio}</p>
            </div>
            <div className="text-light">
                <p>{prod.descripcion}</p>
            </div>
            <div>
                <Link to={`/`} className="text-primary">
                    <button className="btn btn-outline-primary btn-block">
                        Volver
                    </button>
                </Link>

            </div>
        </div>
    )
}

export default ItemDetail
