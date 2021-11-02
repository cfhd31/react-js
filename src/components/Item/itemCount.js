import React from 'react'
import { useState } from 'react';
import { navesList } from '../../services/GetFetch';
import './item.css'

export default function ItemCount({onAdd, stock}) {
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

    return (
        <div>
            <div className=" text-center  contador">
                <button onClick={ disminuyeContador }> - </button>
                <h6 className="">{ count }</h6>
                <button onClick={ aumentarContador }> + </button>
            </div>
            <a href="##"className="btn btn-outline-secondary" onClick={()=>onAdd(count)}>
                Agregar al carrito
            </a>

        </div>
    )
}
