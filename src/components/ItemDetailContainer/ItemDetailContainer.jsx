import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getProducto } from "../../mockApi/mockApiProductos";
import { ItemList } from "../ItemListContainer/ItemList/ItemList";


export function ItemDetailContainer(){
    const [dataCard, setDataCard] = useState([])
    const {id} = useParams(); 
    
    useEffect( () =>{
        getProducto(parseInt(id)).then( (respuestaCompletada) => {
            console.log("consulta completada")
            setDataCard([respuestaCompletada])
        })
        .catch( (respuestaError)=> {
           console.log('error en consulta', respuestaError) 
        })
        
    },[id])  

    return( <ItemList dataCard={dataCard}  typeCard='details'/> );
}