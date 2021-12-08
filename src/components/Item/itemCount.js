import React from 'react'
import { useState } from 'react';

import './item.css'

export default function ItemCount({onAdd, stock}) {
    const [count, setCount] = useState(1);
    
    const aumentarContador = () => {
        if (count < stock){
            setCount(count + 1)
        }
    };
    
    const disminuyeContador = () => {
        if(count > 1){
          setCount(count - 1);
        }
    };

    return (
        <div>
            <div className=" text-center">
                <button onClick={ disminuyeContador } className="btn-secondary btnMasMenos alert-link"> - </button>
                <span className="espacio alert-link">{ count }</span>
                <button onClick={ aumentarContador } className="btn-secondary btnMasMenos alert-link"> + </button>
            </div>
            <a href="##"className="btn btn-outline-primary" onClick={()=>onAdd(count)}>
                Agregar al carrito
            </a>

        </div>
    )
}




