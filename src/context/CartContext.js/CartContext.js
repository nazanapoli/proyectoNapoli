import { createContext } from "react"
import { useState } from "react"

export const cartContext = createContext()
const { Provider } = cartContext

export const MyProvider = ({ children }) => {

    const [cartList, setCartList] = useState([])

    const isInCart = (id) => {
        cartList.find(e => e.id === id)
    }

    const addItem = (item, quantity) => {
        if (isInCart(item.id)) { //si el producto ya se encuentra en cart, suma las cantidades
            const newCart = cartList.map( e => {
                if (e.id === item.id){
                    const newQuantity = e.quantity + quantity
                    return {...e, quantity: newQuantity}
                } else {
                    return e
                }
            })
            setCartList(newCart)
        } else { //si el producto no esta, lo agrega y le asigna cantidad
            const newProduct = {...item, quantity: quantity}
            setCartList([...cartList, newProduct])
        }
    }

    const removeItem = (id) => {
        setCartList(cartList.filter(e => e.id !== id ))
    } //devuelve el cartList sin el item eliminado por el user

    const clear = () => {
        setCartList([])
    }

    const total = () => {
        let totalPric = cartList.reduce((acc, e) => acc += (e.price * e.quantity),0)
        cartList.map(e => console.log(e.price))
        return totalPric
    }

    const totalQuantity = () => {
        let totalCant = cartList.reduce((acc, e)=>acc += e.quantity,0)
        cartList.map(e => console.log(e.quantity))
        return totalCant
    }

    return(
        <Provider value={{cartList: cartList, isInCart, addItem, removeItem, clear, total, totalQuantity}}>
            {children}
        </Provider>
    )
}