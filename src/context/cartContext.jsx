import { createContext, useEffect, useState } from "react";
//se crea el contexto
export const cardContext = createContext()
//se exporta la funcion donde metetere los elementos que van acceder al conteto
export function CartContextProvider(props){
    const [cart, setCart] = useState([])


    useEffect( () => {
        console.log("items", cart.length)
        if(cart.length === 0  && sessionStorage.getItem("cart") !== null){
            let content = JSON.parse(sessionStorage.getItem("cart"))
            console.log("content", content)
            setCart( content )
        }
    },[cart.length] )

    //funcion de cargar SessionStorage

    function loadSessionStorage(data){
        sessionStorage.setItem("cart", JSON.stringify(data) )
    }

    //funcion añadir items al carrito
    function addItem(itemAddToCard, countProduct, totalPrecio){
        let item = {...itemAddToCard}
        item["countProduct"] = countProduct
        item["totalPrecio"] = totalPrecio
        let newCart = [...cart]
        //saber si un elemento ya existe
        let producto = newCart.some( (elemento) => {
            return elemento['id'] === item.id
        })
        if(producto === true){
            newCart.map( (elemento) => {
                if(elemento.id === item.id){
                    elemento.countProduct   = elemento.countProduct + item.countProduct
                    elemento.totalPrecio    = elemento.totalPrecio + item.totalPrecio
                }
                return elemento
            })
        }
        else{
            newCart.push(item)
        }
        setCart(newCart)
        loadSessionStorage(newCart)
    }
    
    function removeItem(itemId){
        let newCart = [...cart]
        newCart = newCart.filter((item) => item.id !== itemId)
        setCart(newCart)
        loadSessionStorage(newCart)
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

    function totalPrecioItems(){
        let precioTotal = 0
        let newTotalPrecio = [...cart]
        newTotalPrecio.forEach( (item) =>{
            precioTotal += item.totalPrecio
        } )
        return precioTotal
    }

    return(
        <cardContext.Provider value={ {cart, addItem, totalItemsCount, removeItem, totalPrecioItems} }>
            {props.children}
        </cardContext.Provider>
    )
}
