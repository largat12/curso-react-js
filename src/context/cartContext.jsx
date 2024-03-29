import { createContext, useEffect, useState } from "react";
//se crea el contexto
export const cardContext = createContext()
//se exporta la funcion donde metetere los elementos que van acceder al conteto
export function CartContextProvider(props){
    const [cart, setCart] = useState([])
    const [dataCupon, setDatacupon] = useState([])
    const [cuponPrecio, setCuponPrecio] = useState(0)
    const [subTotalPrecio, setSubTotalPrecio] = useState(0)
    const [totalPrecio, setTotalPrecio] = useState(0)

    useEffect( () => {
        if(cart.length === 0  && sessionStorage.getItem("cart") !== null){
            let content = JSON.parse(sessionStorage.getItem("cart"))
            setCart( content )
        }
    },[] )
    
    useEffect( () =>{
        //funcion para obtener subtotal del valor de los items
        const subTotalPrecioItems = () =>{
            let precioTotal = 0
            let newTotalPrecio = [...cart]
            newTotalPrecio.forEach( (item) =>{
                precioTotal += item.totalPrecio
            } )
            setSubTotalPrecio(precioTotal) 
        }
        subTotalPrecioItems();
        const aplicarCupon = (searchDataCupon) => {
            if(searchDataCupon.length !== 0){
                let valor = 0
                if(searchDataCupon[0].tipo === "porcentaje"){
                    valor = searchDataCupon[0].valor*(subTotalPrecio/100)
                }
                else if(searchDataCupon[0].tipo === "valor"){
                    valor = searchDataCupon[0].valor
                }
                if(cuponPrecio.valor !== valor){
                    setCuponPrecio( {id:searchDataCupon[0].id,nombre:searchDataCupon[0].cupon,valor:valor} )
                }
            }
        }
        aplicarCupon(dataCupon)
        //funcion suma total de valores items  - cupon
        const totalPrecioItems = () => {
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
        totalPrecioItems();
    },[cart, dataCupon, cuponPrecio, subTotalPrecio])



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
    //function de eliminar todos los elementos del carrito
    function clear(){
        let newCart = []
        setCart(newCart)
        loadSessionStorage(newCart)
        setDatacupon([])
        setCuponPrecio(0)
        setSubTotalPrecio(0)
        setTotalPrecio(0)
    }
    //funcion para buscar el cupon
    function searchCupon(cupon){
        let searchDataCupon = [...cupon];
        setDatacupon(searchDataCupon)
       
    }
    
    return(
        <cardContext.Provider value={ {cart, addItem, removeItem, totalItemsCount, subTotalPrecio, cuponPrecio, totalPrecio, searchCupon, clear} }>
            {props.children}
        </cardContext.Provider>
    )
}
