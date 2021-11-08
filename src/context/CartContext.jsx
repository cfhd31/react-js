import React from 'react'
import { createContext, useState, useContext } from "react";

const CartContext = createContext()
export const useCartContext = () => useContext(CartContext);

    const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])

    function agregarAlCarrito({items}){
        setCartList([...cartList, items])
    }

    const mostrarListado =()=>{
        console.log(cartList)
    }
    return (
        <div>
            <CartContext.Provider value={[cartList, mostrarListado, agregarAlCarrito]}>
               {children}
            </CartContext.Provider>
        </div>
    )
}

export default CartContextProvider
