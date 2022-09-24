
import './itemListContainer.css'
import { getVuelos } from '../../mockApi/mockApiVuelos';
import { useState, useEffect } from 'react';
import { ItemList } from './ItemList/ItemList';


export function ItemListContainer(props){
    const [dataCard, setDataCard] = useState([])
    const [dataTypeCard, setDataTypeCard] = useState("")
    
    useEffect( () =>{
        getVuelos().then( (respuestaCompletada) => {
            console.log("consulta completada")
            setDataCard(respuestaCompletada)
            setDataTypeCard("Vuelos")
            
        })
        .catch( (respuestaError)=> {
           console.log('error en consulta', respuestaError) 
        })
        
    },[])

    return(
        <div className='contenedor-page'>
            <div className='row'>
                <h1 className='titulos'>{props.title}</h1>
                <p className='descripcion'>{props.description}</p>
                <div className='container-card'>
                    <ItemList dataCard={dataCard} dataTypeCard={dataTypeCard} />
                </div>
                  
            </div>
        </div>
      
    );
  
}
