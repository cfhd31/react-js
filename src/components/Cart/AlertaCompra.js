import React from 'react'

export default function AlertaCompra() {
    return (
        <div>
            <div className="toast">
                <div className="toast-header">
                    <div className="rounded mr-2" style="height: 16px;width: 16px;background-color: red;"></div>
                    <strong className="mr-auto">Gracias por su compra</strong>
                    <small>Hace 2 segundos</small>
                    <button type="button" className="ml-2 mb-1 close" data-dismiss="toast">
                    <span aria-hidden="true">&times;</span>
                    </button>
                </div>
                <div className="toast-body">
                    60
                </div>
            </div>
        </div>
    )
}
