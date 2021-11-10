import React from 'react'
import { useState } from 'react';

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
            <div className=" text-center">
                <button onClick={ disminuyeContador } className="btn-danger  btnMasMenos"> - </button>
                <span className="espacio">{ count }</span>
                <button onClick={ aumentarContador } className="btn-success btnMasMenos"> + </button>
            </div>
            <a href="##"className="btn btn-outline-primary" onClick={()=>onAdd(count)}>
                Agregar al carrito
            </a>

        </div>
    )
}
