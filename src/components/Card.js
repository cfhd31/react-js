import React from 'react'



function Card({nave, precio, imagenes}) {
    return (
        <div className="card text-center bg-dark">
            <img src={imagenes} className=" imagenLogo2" />
            <div className="card-body text-light">
                <h6 className="card-title">Nave: {nave}</h6>
                <p className="card-text text-secundary">Precio: {precio}</p>
                <a href="##"className="btn btn-outline-secondary ">
                    Comprar
                </a>
            </div>
        </div>
    )
}

export default Card
