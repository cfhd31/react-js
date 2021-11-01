import React, {useEffect} from 'react'
import { navesList } from '../../services/GetFetch'
import ItemCount from './ItemCount'


export default function ItemListContainer({initial, stock, nombre, precio, imagen, id}) {



    return (
       
            <div className="" key={id}>
                <div className="card text-center bg-dark col-md-3 container-fluid">
                    <img src={imagen} className=" imagenLogo2" />
                    <div className="card-body text-light">
                        <h6 className="card-title">Nave: {nombre}</h6>
                        <p className="card-text text-secundary">Precio: {precio}</p>
                        <ItemCount stock ={stock} onAdd={nombre} initial="1" />
                    </div>
                </div>
            </div>
        )
}

