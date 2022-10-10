import './itemCount.css'

import { useState } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlus, faMinus } from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';

export function ItemCount(props){
    const stock = parseInt(props.stock)
    const precio = parseInt(props.precio)
    const [countProduct, setCountProduct] = useState(1)
    const [totalPrecio, setTotalPrecio] = useState(parseInt(props.precio))

    

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
    

    function handleAddToCard(evt){
        evt.preventDefault();
        props.onAddClick(countProduct, totalPrecio)
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
                    {
                        props.textAddCart.state ?
                        <button className="btnAddCart aggregate"  onClick={handleAddToCard}>Agregar al carrito</button> 
                        :
                        <Link to="/cart/"><button className='btnAddCart added'>Ver carrito</button></Link>
                        
                    }
                </div>
            </div>
        </div>
    );
}