import './itemCount.css'

import { useEffect, useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'

export function ItemCount(props){
    const stock = parseInt(props.stock)
    const [countProduct, setCountProduct] = useState(1)
    const [textAddCart, setTextAddCart] = useState([{}])

    useEffect(()=> {
        setTextAddCart([{"text":"Agregar al carrito", "state":true, "class":"aggregate"}])
    }, [])

    function handleAddCountProduct(){
        if (countProduct < stock) setCountProduct(countProduct + 1)
    }
    function handleRemoveCountProduct(){
        if (countProduct > 1) setCountProduct(countProduct - 1)
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
        <div className="ElementCountProduct">
            <div className="contentCount">
                <div className="btnCount  addCountProduct" onClick={handleAddCountProduct}>
                    <FontAwesomeIcon icon={faPlus} />
                </div>
                <div className="countProduct">{countProduct}</div>
                <div className="btnCount removeCountProduct" onClick={handleRemoveCountProduct}>
                    <FontAwesomeIcon icon={faMinus} />
                </div>
            </div>
            <button className={"btnAddCart "+textAddCart[0].class}  onClick={handleTextAddCart}>{textAddCart[0].text}</button>
            
        </div>
    );
}