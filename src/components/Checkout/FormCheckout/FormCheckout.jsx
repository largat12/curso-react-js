import './formCheckout.css'
import { useState } from "react";
import { itemsFormCheckout } from "../../../Helpers/itemsFormCheckout"
import { ELementsForm } from "./ElementsForm/ELementsForm"
import { ElementsCheckout } from './ElementsCheckout/ElementsCheckout';
export function FormCheckout({onChangeForm, cart, subTotalPrecio, cuponPrecio, totalPrecio}){
    const [btnCheckout, setBtnCheckout] = useState('Realizar pedido')
    //trae el json donde esta el listado de elementos con sus respectivos valores
    const itemsForm = itemsFormCheckout;
    const [valuesForm, setValuesForm] = useState({
        nombrecompleto:'',
        telefono:'',
        correo:'',
        direccion:'',
        mediospago:{...itemsForm}[4].option[0].value,
    })
    
    console.log(cuponPrecio)
    function submitFormCheckout(e){
        e.preventDefault()
        onChangeForm(valuesForm)
        setBtnCheckout('Realizando pedido...')
    }
    function changeFormCheckout(e){
        let newValues = {...valuesForm}
        newValues[e.target.name] = e.target.value;
        setValuesForm(newValues);
    }

    return (
            
            <form   id="formChekout" onSubmit={submitFormCheckout}>
                <div className="container">
                    <div className="row">
                        <div className="col-8">
                            <h1 className='titulos' style={ {textAlign:'left'} }>Detalles de facturación</h1>
                            {
                                itemsForm.map( (itemForm) => {
                                    return <ELementsForm key={itemForm.id} element={itemForm.element} {...itemForm} value={valuesForm[itemForm.name]} onChange={changeFormCheckout} />
                                })
                            } 
                        </div>
                        <div className="col-4 contentTablaCheckout">
                            <h1 className='titulos' style={ {textAlign:'left'} }>Su pedido</h1>
                            <div className='container tablaCheckout'>
                                <div className='row titulo header'>
                                    <div className='col-6'><p>Producto</p></div>
                                    <div className='col-6'><p>Total</p></div>
                                </div>
                                {
                                    cart.map( (item) => {
                                        return (
                                            <ElementsCheckout key={item.id} data={ {title:item.title, count:item.countProduct, precio:item.totalPrecio} } elemento='producto'/>
                                        )
                                    } )
                                }

                                <ElementsCheckout data={ {title:'Subtotal', precio:subTotalPrecio} } elemento='valores'/>
                                {   
                                    cuponPrecio !== 0 ? 
                                    <ElementsCheckout data={ {title:'Cupón',    precio:cuponPrecio.valor} } elemento='valores'/>
                                    :
                                    <></>
                                }
                                <ElementsCheckout data={ {title:'Total', precio:totalPrecio} } elemento='valores'/>

                                <div className='row terminos'>
                                    <div className='col-12'>
                                        <p>Sus datos personales se utilizarán para procesar su pedido, respaldar su experiencia en este sitio web y para otros fines descritos en nuestra política de privacidad.</p>
                                        <p><input type="checkbox" required/>He leído y estoy de acuerdo con los términos y condiciones de la web </p>
                                        <button type='submit' className='buttonSubmit'>{btnCheckout}</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>    
            </form>
                    
        )
}