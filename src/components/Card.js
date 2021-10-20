import React, {useState} from 'react'



function Card({nave, precio, imagenes}) {
    var stock = 15
    const [count, setCount] = useState(1);
  
    const aumentarContador = () => {
      if(count < stock){
        setCount(count + 1);
      }
    };
  
    const disminuyeContador = () => {
      if(count > 1){
        setCount(count - 1);
      }
    };

    return (
        <div className="card text-center bg-dark">
            <img src={imagenes} className=" imagenLogo2" />
            <div className="card-body text-light">
                <h6 className="card-title">Nave: {nave}</h6>
                <p className="card-text text-secundary">Precio: {precio}</p>
                
                <div className="conteiner cantidad justify-content-center d-flex ">
                    
                    <button onClick={ disminuyeContador }>-</button>
                    <h6>{ count }</h6>
                    <button onClick={ aumentarContador }>+</button>
                </div>
                <a href="##"className="btn btn-outline-secondary ">
                    Agregar al carrito
                </a>
            </div>
        </div>
    )
}

export default Card
