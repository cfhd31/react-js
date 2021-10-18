import React from 'react'
import imagen1 from  '../assets/imagen/eve.png'
function Card() {
    return (
        <div className="card">
            <img src={imagen1} alt=""/>
            <div className="card-body">
                <h4 className="card-title"> Titulo de la Tarjeta </h4>
                <p className="card-text text-secundary"> texto de la tarjeta</p>
            </div>
            
        </div>
    )
}

export default Card
