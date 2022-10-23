import './checkout.css' 
import { createOrden } from "../../servicios/orden"
import { useContext, useState} from "react";
import { cardContext } from "../../context/cartContext";
import { ErrorLoading } from "../ErrorLoading/ErrorLoading";
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft }  from "@fortawesome/free-solid-svg-icons";
import { FormCheckout } from './FormCheckout/FormCheckout';

export function Checkout(props){
    const [feedBackMsg, setFeedBackMsg] = useState(null)
    const {cart, subTotalPrecio, cuponPrecio, totalPrecio, clear} = useContext(cardContext)
    const navigate = useNavigate()


    function onChangeForm(dataForm){

        let orden = {
            buyer:dataForm,
            items: cart,
            date:new Date(),
            subtotal: subTotalPrecio,
            cupon:cuponPrecio, 
            total:totalPrecio,

        }
        createOrden(orden).then((respuesta) => {
            let urlPage = `/thankyou/${respuesta}`;
            clear()
            navigate(urlPage)

        }).catch((respuestaError) =>{
            setFeedBackMsg(respuestaError.message) 
        })
    }

    //useNavigate
    return(
        feedBackMsg ?
        <ErrorLoading errorMessage={feedBackMsg}/>
        :
        cart.length !== 0 ?
            <>
                {props.children} 
                <div className='container checkout'>
                    <div className='row'>
                        <div className='col-12'>
                            <FormCheckout onChangeForm={onChangeForm} cart={cart} subTotalPrecio={subTotalPrecio} cuponPrecio={cuponPrecio} totalPrecio={totalPrecio}/>
                        </div>
                    </div>
                </div>
                
            </>
            
            :
            <div className="container checkout vacio">  
                <div className="row">
                    <h1>No tienes productos en el carrito</h1>
                    <Link to="/"><FontAwesomeIcon icon={faAngleLeft} /> Volver al inicio</Link>
                </div>
            </div>
        )
}