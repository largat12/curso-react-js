import { createContext, useEffect, useState } from "react";
//se crea el contexto
export const cardContext = createContext()
//se exporta la funcion donde metetere los elementos que van acceder al conteto
export function CartContextProvider(props){
    const [cart, setCart] = useState([])
    const [subTotalPrecio, setSubTotalPrecio] = useState(0)
    const [cuponPrecio, setCuponPrecio] = useState(0)
    const [totalPrecio, setTotalPrecio] = useState(0)

    useEffect( () => {
        if(cart.length === 0  && sessionStorage.getItem("cart") !== null){
            let content = JSON.parse(sessionStorage.getItem("cart"))
            setCart( content )
        }
        subTotalPrecioItems()
        totalPrecioItems()
    },[cart.length, cuponPrecio] )

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
    //funcion remover item del carrito
    function removeItem(itemId){
        let newCart = [...cart]
        newCart = newCart.filter((item) => item.id !== itemId)
        setCart(newCart)
        loadSessionStorage(newCart)
    }
    //funcion para obtener cantidad de items del carrito
    function totalItemsCount(){
        let totalCount = 0
        cart.forEach(itemCount => {
            totalCount += itemCount.countProduct
            //setTotalCount(totalCount + itemCount.countProduct)
        })
        return totalCount
        //return totalCount;
    }
    //funcion para obtener subtotal del valor de los items
    function subTotalPrecioItems(){
        let precioTotal = 0
        let newTotalPrecio = [...cart]
        newTotalPrecio.forEach( (item) =>{
            precioTotal += item.totalPrecio
        } )
        setSubTotalPrecio(precioTotal) 
    }
    //funcion para buscar el cupon
    function searchCupon(cupon){
        let dataCupon = [...cupon];
        let subTotal = subTotalPrecio
        let valor = 0
        if(dataCupon[0].tipo === "porcentaje"){
            valor = dataCupon[0].valor*(subTotal/100)
        }
        else if(dataCupon[0].tipo === "valor"){
            valor = dataCupon[0].valor
        }
        setCuponPrecio( {id:dataCupon[0].id,nombre:dataCupon[0].cupon,valor:valor} )
    }
    //funcion suma total de valores items  - cupon
    function totalPrecioItems(){
        if(cuponPrecio !== 0 && typeof cuponPrecio === 'object'){
            let subTotal = subTotalPrecio
            let cupon = cuponPrecio.valor
            let total = subTotal - cupon
            setTotalPrecio(total < 0 ? 0 : total)
        }
        else{
            let precioTotal = 0
            let newTotalPrecio = [...cart]
            newTotalPrecio.forEach( (item) =>{
                precioTotal += item.totalPrecio
            } )
            setTotalPrecio(precioTotal)
        }

    }



    return(
        <cardContext.Provider value={ {cart, addItem, removeItem, totalItemsCount, subTotalPrecio, cuponPrecio, totalPrecio, searchCupon} }>
            {props.children}
        </cardContext.Provider>
    )
}
