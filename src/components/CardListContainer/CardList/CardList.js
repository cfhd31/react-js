import React from 'react'
import {getFetch} from '../../GetFetch';
import Card from './Card/Card'
import './cardList.css';

const naves =[
    { id: 1, nave: "Vindicator",  precio: "5B",   imagen: '../../assets/imagen/acorazado3.jpg'},
    { id: 2, nave: "Rattlesnake", precio: "4.3B", imagen: '../../assets/imagen/acorazado1.jpg'},
    { id: 3, nave: "Bhaalgorn",   precio: "6.3B", imagen: '../../assets/imagen/acorazado2.jpg'},
    { id: 4, nave: "Machariel",   precio: "3.3B", imagen: '../../assets/imagen/acorazado3.jpg'},
]


function CardList() {
    return (
        <div className="container d-flex justify-content-center  h-100 align-items-center">
            <div className="row">
                {
                    naves.map(nave => (
                        <div className="col-md-3" key={nave.id}>
                            <Card nave={nave.nave} precio={nave.precio} imagenes={nave.imagen}/>
                        </div>
                    ))
                }
            </div>  
        </div>
    )
}

export default CardList

