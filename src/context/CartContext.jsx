import { createContext, useState, useContext, useEffect} from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const [contadorCarrito, setContador] = useState([0])
 
    const agregarAlCarrito = (items) =>{
        const checkNuevo = cartList.find(item => item.id === items.id);



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
        const itemBorrar = cartList.filter(item => item.id !== itemId)
        setCartList(itemBorrar)
    }
    
    const precioTotal = ()=>{
        return( cartList.reduce((prev, next) => prev + (next.cantidad * next.price), 0))
    }

    useEffect(() => {
        setContador(cartList.reduce((prev, next) => prev + next.cantidad, 0))
    },[borrarItem])
    
    const mostrarListado =()=>{
        console.log(cartList)
    }

    const [formData, setFormData] = useState({name: '', phone: '', email: '', email2: ""})
    return (
        <div>
            <CartContext.Provider value={{cartList,formData, setFormData, mostrarListado, agregarAlCarrito, borrarTodo, borrarItem, contadorCarrito, precioTotal}}>
            {children}
            </CartContext.Provider>
        </div>
    )
}

export default CartContextProvider
