import React from 'react'
import { useState } from 'react';
import { navesList } from '../../services/GetFetch';

export default function ItemCount({}) {
    const [count, setCount] = useState(1);
    stock

    const aumentarContador = () => {
        if (count < prod.stock){
            setCount(count + 1)
        }
     console.log(prod.stock)
    };
    
    const disminuyeContador = () => {
        if(count > 1){
          setCount(count - 1);
          
        }
        console.log(count)
    };

    const agregarCarrito = (count) => {    
        alert("Se agregó " + count + " " + nombre)    
    }

    return (
        <div>
            <div className="  ">
                <button onClick={ disminuyeContador }> - </button>
                <h6 className="">{ count }</h6>
                <button onClick={ aumentarContador }> + </button>
            </div>
            <a href="##"className="btn btn-outline-secondary" onClick={ agregarCarrito(count) }>
                Agregar al carrito
            </a>
        </div>
    )
}
