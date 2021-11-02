import React from 'react'
import { useState } from 'react';
import { navesList } from '../../services/GetFetch';

export default function ItemCount({initial, stock, onAdd, nombre}) {
    const [count, setCount] = useState(1);
    

    const aumentarContador = () => {
        if (count < stock){
            setCount(count + 1)
        }
     console.log(stock)
    };
    
    const disminuyeContador = () => {
        if(count > 1){
          setCount(count - 1);
          
        }
        console.log(count)
    };

    const agregarCarrito = (count) => {    
        console.log("Se agregó " + count + " " + nombre)    
    }

    return (
            <div>
                <div className="conteiner cantidad justify-content-center d-flex ">
                    <button onClick={ disminuyeContador }> - </button>
                    <h6>{ count }</h6>
                    <button onClick={ aumentarContador }> + </button>
                </div>
                <a href="##"className="btn btn-outline-secondary" onClick={ agregarCarrito(count) }>
                    Agregar al carrito
                </a>
            </div>
    )
}
