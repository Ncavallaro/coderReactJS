import { createContext, useState } from "react";



export const CartContext = createContext([]);

const CartContextProvider = ({children}) =>{

    const [cartList, setCartList] = useState([])

    const addToCart = (item, cant) => {
        const itemIs = cartList.find((trip ) => trip.id === item.id);
        if (itemIs){
            setCartList(
                cartList.map((trip ) => {
                    return {...trip, cant: trip.cant + cant };
                })
                );
        } else {
            setCartList([
                ...cartList,
                {
                id: item.id,
                name: item.name,
                stock: item.stock,
                price: item.price,
                img: item.img,
                cant: cant
            }])
        }
        
    }

    const removeItem = (id) => {
        const result = cartList.filter(item => item.id != id)
        setCartList(result)
    }

    const clear = () => {
        setCartList([]);
    }

    return (
        <CartContext.Provider value={{cartList , addToCart, clear ,removeItem }}>
        {children}
        </CartContext.Provider>
    );
}

export default CartContextProvider;