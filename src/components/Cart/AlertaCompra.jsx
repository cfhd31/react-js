import React from 'react'

export default function AlertaCompra(prop) {
    return (
     
            <div className="toast">
                <div className="toast-header">
                    <div className="rounded mr-2"></div>
                    <strong className="mr-auto">Gracias por su compra</strong>
                        <p>El numero de orden es: {prop}</p>
                   
                </div>
              
            </div>
       
    )
}
