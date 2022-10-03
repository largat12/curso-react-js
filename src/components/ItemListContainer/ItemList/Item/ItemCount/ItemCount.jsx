import './itemCount.css'

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

export function ItemCount(props){
    const stock = parseInt(props.stock)
    const precio = parseInt(props.precio)
    const [countProduct, setCountProduct] = useState(1)
    const [textAddCart, setTextAddCart] = useState([{}])
    const [totalPrecio, setTotalPrecio] = useState(parseInt(props.precio))

    useEffect(()=> {
        setTextAddCart([{"text":"Agregar al carrito", "state":true, "class":"aggregate"}])
    }, [])

    function handleAddCountProduct(){
        if (countProduct < stock){
            setCountProduct(countProduct + 1)
            setTotalPrecio(totalPrecio + precio)
        } 
    }
    function handleRemoveCountProduct(){
        if (countProduct > 1){
            setCountProduct(countProduct - 1)
            setTotalPrecio(totalPrecio - precio)
        }
    }
    





    function handleTextAddCart(){
        if(textAddCart[0].state){
            setTextAddCart([{"text":"Añadido al carrito", "state":false, "class":"added"}])
        }
        else{
            setTextAddCart([{"text":"Agregar al carrito", "state":true, "class":"aggregate"}])
        }
    }
    
    

    return(
        <div className="ElementCountProduct container-fluid">
            <div className='row'>
                <div className='col-6'>
                    <p className='subtitulo'>Cantidad</p>

                    <div className="contentCount">
                        <div className='count'>
                            <button className="btnCount removeCountProduct" onClick={handleRemoveCountProduct}>
                                <FontAwesomeIcon icon={faMinus} />
                            </button>
                            <div className="countProduct">{countProduct}</div>
                            <button className="btnCount  addCountProduct" onClick={handleAddCountProduct}>
                                <FontAwesomeIcon icon={faPlus} />
                            </button>
                        </div>
                    </div>
                </div>
                <div className='col-6'>
                    <p className='subtitulo'>Total</p>
                    <h6 className='precio-total'>$ {new Intl.NumberFormat("es-CO").format(Math.trunc(totalPrecio))}</h6>
                </div>
            </div>
            <div className='row'>
                <div className='col-12'>
                    <button className={"btnAddCart "+textAddCart[0].class}  onClick={handleTextAddCart}>{textAddCart[0].text}</button>
                </div>
            </div>
        </div>
    );
}