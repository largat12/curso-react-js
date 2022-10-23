import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducto } from "../../servicios/productos";
import { ErrorLoading } from "../ErrorLoading/ErrorLoading";
import { ItemList } from "../ItemListContainer/ItemList/ItemList";


export function ItemDetailContainer(){
    const [dataCard, setDataCard] = useState([])
    const [feedBackMsg, setFeedBackMsg] = useState(null)
    const {id} = useParams(); 
    
    useEffect( () =>{
        getProducto(id).then( (respuestaCompletada) => {
            console.log("consulta completada")
            setDataCard([respuestaCompletada])
        })
        .catch( (respuestaError)=> {
            setFeedBackMsg(respuestaError.message) 
        })
        
    },[id])  
    
    
    return( 
            feedBackMsg ?
            <ErrorLoading errorMessage={feedBackMsg}/>
            :
            <ItemList dataCard={dataCard}  typeCard='details' colElements="1"/>
            
        );
}