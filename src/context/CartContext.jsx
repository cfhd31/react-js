import { createContext, useState, useContext, useEffect} from "react";

const CartContext = createContext()

export const useCartContext = () => useContext(CartContext);

export const CartContextProvider = ({children}) => {
    const [cartList, setCartList] = useState([])
    const [contadorCarrito, setContador] = useState(0);
    const [PrecioTotal, setPrecioTotal] = useState(0)
    
    
    const agregarAlCarrito = (items) =>{
        setPrecioTotal (PrecioTotal + (items.prod.precio * items.cantidad))   //contador precio total
        setContador (contadorCarrito + items.cantidad)
        const checkNuevo = cartList.find(item => item.prod.id === items.prod.id);
        
        if (checkNuevo) {
            checkNuevo.cantidad = checkNuevo.cantidad + items.cantidad
            setCartList(cartList)
            console.log('Se agrego cantidad')
            // setContador(contadorCarrito => contadorCarrito -1)    
        } else {
            setCartList([...cartList, items])
            // setContador(contadorCarrito => contadorCarrito)
        }

    }

    const borrarTodo = () => {
        setCartList([])
        setContador(0)
        setPrecioTotal(0)
    }
    const borrarItem=(itemId)=>{
        setPrecioTotal(PrecioTotal - (itemId.prod.precio * itemId.cantidad))
        setContador(contadorCarrito - (itemId.cantidad))
        
        const itemBorrar = cartList.filter(item => item.prod.id !== itemId)
        setCartList(itemBorrar)
        //setContador(contadorCarrito -1)
    }

    const mostrarListado =()=>{
        console.log(cartList)
    }

    useEffect(() => {
        console.log("ejecuta")
        //setContador(cartList.reduce((prev, next) => prev + next.cantidad, 0))
    },[borrarItem])

    return (
        <div>
            <CartContext.Provider value={{cartList, mostrarListado, agregarAlCarrito, borrarTodo, borrarItem, contadorCarrito, PrecioTotal}}>
            {children}
            </CartContext.Provider>
        </div>
    )
}

export default CartContextProvider
