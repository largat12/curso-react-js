import './cuponCart.css'
import { useContext, useEffect, useState } from "react";
import { cardContext } from "../../../context/cartContext";
import { getCupon } from "../../../servicios/cupon";



export function CuponCart(){
    const [cupon, setCupon] = useState(null)
    const [mensajeCupon, setMensajeCupon] = useState("")
    const {searchCupon} = useContext(cardContext)
    const [valueSubmit, setValueSubmit] = useState("Aplicar cupón")
    
    useEffect( ()=>{
       
        if(cupon !== null){
            getCupon(cupon).then( (respuesta) => {
                searchCupon(respuesta)
                setMensajeCupon(<p className="mensaje cupon exito">¡Cupón aplicado con exito!</p>)
                setValueSubmit("Aplicar cupón")
            } )
            .catch( (error) => {
                setMensajeCupon(<p className="mensaje cupon error">Cupón no es valido</p>)
                setValueSubmit("Aplicar cupón")
            } )
            
        }
    },[cupon] )

    function  handleSubmit(evt) {
        evt.preventDefault();
        let valor = evt.target.couponCode.value
        if( valor !== '' ){
            setMensajeCupon("")
            setValueSubmit("Cargando...")
            setCupon(valor.toUpperCase())
        }
        else{
            setMensajeCupon(<p className="mensaje cupon advertencia">* Ingrese un cupón</p>)
            setTimeout(()=>{
                setMensajeCupon("")
            },3000)
        }
    }
    
    return(
        <>
            <form onSubmit={handleSubmit}>
                <input type="text" name="couponCode"  id="couponCode" placeholder="Código promocional" />
                <input type="submit" name="apply_coupon" id="couponSubmit" value={valueSubmit} />
            </form>
            {
                mensajeCupon !== ""
                ? 
                mensajeCupon
                :
                <></>
            }
            
        </>
    )
}