import React from 'react'
import Card from '../Card/Card'
import './cardList.css';

// const naves =[
//     { id: 1, Nombre: "Vindicator",  precio: "5B",   imagen: '../../assets/imagen/acorazado3.jpg'},
//     { id: 2, Nombre: "Rattlesnake", precio: "4.3B", imagen: '../../assets/imagen/acorazado1.jpg'},
//     { id: 3, Nombre: "Bhaalgorn",   precio: "6.3B", imagen: '../../assets/imagen/acorazado2.jpg'},
//     { id: 4, Nombre: "Machariel",   precio: "3.3B", imagen: '../../assets/imagen/acorazado3.jpg'},
// ]


function CardList({product}) {
    return (
        <div className="container d-flex justify-content-center  h-100 align-items-center">
            <div className="row">
                {
                    product.map(prod => (
                        <div className="col-md-3" >
                            { <Card key={prod.id} prod={prod} /*nave={prod.Nombre} precio={prod.precio} imagenes={prod.imagen}*//> }
                        </div>
                    ))
                }
            </div>  
        </div>
    )
}

export default CardList

