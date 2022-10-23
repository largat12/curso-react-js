import './thankYou.css'
import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import { getOrden } from "../../servicios/orden"
import { ErrorLoading } from "../ErrorLoading/ErrorLoading"
import { LoadingThankYou } from "../Loading/LoadingThankYou/LoadingThankYou"
import { ElementsCheckout } from '../Checkout/FormCheckout/ElementsCheckout/ElementsCheckout'

export function ThankYou(){
    const [feedBackMsg, setFeedBackMsg] = useState(null)
    const [dataPedido, setDataPedido] = useState([])
    const {id} = useParams()
    
    const options = { month: 'long', day: 'numeric', year: 'numeric', hour:'numeric', minute:'numeric'};
    
    useEffect( () => {
        getOrden(id).then( (respuesta)=>{
            setDataPedido(respuesta)
        }).catch( (respuestaError) => {
            setFeedBackMsg(respuestaError.message) 
        })
    },[id])

    
    return (
        feedBackMsg ?
        <ErrorLoading errorMessage={feedBackMsg}/>
        :
        //cargando
        dataPedido.length === 0 ?
            <LoadingThankYou />
            :
            <div className='container thankyou'>
                <div className='row'>
                    <div className='col-12'> 
                        <h1 className="titulos">Gracias. Tu orden ha sido recibida.</h1>
                        <h2 className="subtitulos">Mañana en la horas de la mañana te estaremos entregando tu pedido</h2>
                        <div className="container orden">
                            <div className="row">
                                <div className="col-2">
                                    <p className="titulo">NÚMERO DE ORDEN:</p>
                                    <p className="descripcion">{dataPedido.id}</p>
                                </div>
                                <div className="col-2">
                                    <p className="titulo">FECHA:</p>
                                    <p className="descripcion">{new Date(dataPedido.date.seconds * 1000).toLocaleDateString("es-ES", options)}</p>
                                </div>
                                <div className="col-2">
                                    <p className="titulo">TOTAL:</p>
                                    <p className="descripcion">$ { new Intl.NumberFormat("es-CO").format(Math.trunc(dataPedido.total))}</p>
                                </div>
                                <div className="col-2">
                                    <p className="titulo">MEDIO DE PAGO:</p>
                                    <p className="descripcion"> { dataPedido.buyer.mediospago}</p>
                                </div>
                            </div>
                        </div>
                        <h2 className='titulo-simple'>Detalles del pedido</h2>
                        <div className="container pedido">
                            <div className='row titulo header'>
                                <div className='col-6'><p>Producto</p></div>
                                <div className='col-6'><p>Total</p></div>
                            </div>
                            {
                                dataPedido.items.map( (item) => {
                                    return (
                                        <ElementsCheckout key={item.id} data={ {title:item.title, count:item.countProduct, precio:item.totalPrecio} } elemento='producto'/>
                                    )
                                } )
                            }
                            <ElementsCheckout data={ {title:'Subtotal', precio:dataPedido.subtotal} } elemento='valores'/>
                                {   
                                    dataPedido.cupon !== 0 ? 
                                    <ElementsCheckout data={ {title:'Cupón',    precio:dataPedido.cupon} } elemento='valores'/>
                                    :
                                    <></>
                                }
                                <ElementsCheckout data={ {title:'Total', precio:dataPedido.total} } elemento='valores'/>
                        </div>
                    </div>
                </div>
            </div>
        )
}