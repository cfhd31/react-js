import { createContext, useState, useContext, useEffect} from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const [contadorCarrito, setContador] = useState([0])

    const agregarAlCarrito = (items) =>{
        const checkNuevo = cartList.find(item => item.prod.id === items.prod.id);
        
        if (checkNuevo) {
            checkNuevo.cantidad = checkNuevo.cantidad + items.cantidad
            setCartList(cartList)
        } else {
            setCartList([...cartList, items])
        }
        setContador(cartList.reduce((prev, next) => prev + next.cantidad, 0))
    }

    const borrarTodo = () => {
        setCartList([])
    }

    const borrarItem = itemId =>{
        const itemBorrar = cartList.filter(item => item.prod.id !== itemId)
        setCartList(itemBorrar)
    }

    useEffect(() => {
        setContador(cartList.reduce((prev, next) => prev + next.cantidad, 0))
    },[borrarItem])
    const mostrarListado =()=>{
        console.log(cartList)
    }

    return (
        <div>
            <CartContext.Provider value={{cartList, mostrarListado, agregarAlCarrito, borrarTodo, borrarItem, contadorCarrito}}>
            {children}
            </CartContext.Provider>
        </div>
    )
}

export default CartContextProvider
