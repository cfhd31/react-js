import { createContext, useState, useContext } from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    
    const agregarAlCarrito = (items) =>{
        //setCartList([...cartList, items])
        const checkNuevo = cartList.find(item => item.prod.id === items.prod.id);
        if (checkNuevo) {
            checkNuevo.cantidad = checkNuevo.cantidad + items.cantidad
            setCartList(cartList)
            console.log('Se agrego cantidad')
        } else {
            setCartList([...cartList, items])
        }
    }

    const borrarTodo = () => {
        setCartList([])
    }

    const mostrarListado =()=>{
        console.log(cartList)
    }

    return (
        <div>
            <CartContext.Provider value={{cartList, mostrarListado, agregarAlCarrito, borrarTodo}}>
            {children}
            </CartContext.Provider>
        </div>
    )
}

export default CartContextProvider
