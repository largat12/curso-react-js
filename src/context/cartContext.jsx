import { createContext, useState } from "react";
//se crea el contexto
export const cardContext = createContext()
//se exporta la funcion donde metetere los elementos que van acceder al conteto
export function CartContextProvider(props){
    const [cart, setCart] = useState([])

    //funcion añadir items al carrito
    function addItem(itemAddToCard, countProduct, totalPrecio){
        let item = {...itemAddToCard}
        item["countProduct"] = countProduct
        item["totalPrecio"] = totalPrecio

        let newCart = [...cart]
        newCart.push(item)
        setCart(newCart)
    }

    function totalItemsCount(){
        let totalCount = 0
        cart.forEach(itemCount => {
            totalCount += itemCount.countProduct
            //setTotalCount(totalCount + itemCount.countProduct)
        })
        return totalCount
        //return totalCount;
    }

    return(
        <cardContext.Provider value={ {cart, addItem, totalItemsCount} }>
            {props.children}
        </cardContext.Provider>
    )
}
