import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import { useCartContext } from '../../../context/CartContext'
import ItemCount from '../../Item/itemCount'
import './itemDetail.css'

const ItemDetail = ({prod}) => {
    const[count, setCount] = useState(0)
    /*const { cartList, mostrarListado, agregarAlCarrito} = useCartContext()*/

    const [inputType, setInputType] = useState('input')
      const onAdd = (count) => {
        setInputType('button')
        alert("Se agregó " + count + ' ' + prod.nombre)
      }

      const InputCount= ()=> {

        return <button className="btn btn-outline-primary"  onClick={()=>alert('yendo al cart')}>Terminar compra</button>
    }
    
    const ButtonCount= ()=> {
        return <button className="btn btn-outline-primary" onClick={()=>console.log('Producto agregado')}>Agregar Al carrito</button>
    
    }
    
    return (
        /*<div className="col s12 m12 l12 flex" key={prod.id}>
            <div className="card ">
                <div className="card-image waves-effect waves-block waves-light">


                    <div className="col s12 m7 l7 detalleProducto bg-dark ">
                        <h4 className="card-title text-danger font-weight-bold ">{prod.tipo}</h4>
                        <img src={prod.imagen} alt={prod.tipo}/>

                        <h5 className="producto text-light">{prod.nombre}</h5>
                        <span className="price text-light">
                            {(prod.precio)}
                        </span>
                        <div className="text-light">
                            <p>{prod.descripcion}</p>
                        </div>
                        <div className="text-light">
                        <ItemCount stock={prod.stock} initial="1" onAdd={onAdd}/>
                        </div>
                        <Link to={`/`} className="text-primary">
                            <button className="btn btn-outline-primary btn-block">
                                Volver
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>*/



        <div className="card text-center bg-dark col-md-6 container-fluid" >
            <h4 className="card-title text-danger font-weight-bold ">{prod.tipo}</h4>
            <img src={prod.imagen} className=" imagenLogo2" />
            <div className="card-body text-light">
                <h5 className="card-title">Nave: {prod.nombre}</h5>
                <p className="card-text text-secundary">Precio: {prod.precio} ISK</p>
            </div>
            <div className="text-light">
                <p>{prod.descripcion}</p>
            </div>
            <div>
                {/* <div className="text-light">
                    <ItemCount stock={prod.stock} initial="1" onAdd={onAdd}/>
                </div> 
                <Link to={`/`} className="text-primary">
                    <button className="btn btn-outline-primary btn-block">
                        Volver
                    </button>
                </Link>*/}
                <div onClick={()=>onAdd}>
                    {
                        inputType === 'input'?
                        <ItemCount stock={prod.stock} initial="1" onAdd={onAdd}/>
                        :
                        <Link to="/cart" className="pretext comprar">Ir a Carrito</Link>  
                    }
                </div>

            </div>
        </div>
    )
}

export default ItemDetail
