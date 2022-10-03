
import './itemListContainer.css'
import { getProductos, getProductoCategory } from '../../mockApi/mockApiProductos';
import { useState, useEffect } from 'react';
import { ItemList } from './ItemList/ItemList';
import { useLocation, useParams } from 'react-router-dom';


export function ItemListContainer(props){
    const [dataCard, setDataCard] = useState([])
    const [categoryId, setCategoryId] = useState([])

    let location = useLocation();
    const params = useParams();
    const categoria = params.id
    

    
    useEffect( () =>{
        //validar si viene por una categoria
        if( (categoria !== undefined && categoria !== null) && String(location.pathname).indexOf("category") !== -1){
            if(categoryId !== categoria){
                setDataCard([])
            }
            getProductoCategory(categoria).then( (respuestaCompletada) => {
                console.log("consulta completada por categoria")
                setDataCard(respuestaCompletada)
                setCategoryId(categoria)
            })
            .catch( (respuestaError)=> {
               console.log('error en consulta por categoria', respuestaError) 
            })
        }
        else{
            if(categoryId !== categoria){
                setDataCard([])
            }
            getProductos().then( (respuestaCompletada) => {
                console.log("consulta completada todos los productos")
                setDataCard(respuestaCompletada)
            })
            .catch( (respuestaError)=> {
               console.log('error en consulta todos los productos', respuestaError) 
            })

        }
    },[categoria])

    return(
        <div className='contenedor-page'>
            <div className='row'>
                {props.title !== "" ? <h1 className='titulos'>{props.title}</h1> : "" }
                <div className={`container-card col-element-${props.colElements}`}>
                    <ItemList dataCard={dataCard} typeCard={props.viewProduct}/>
                </div>
                  
            </div>
        </div>
      
    );
  
}
