
import './itemListContainer.css'
import { useState, useEffect } from 'react';
import { ItemList } from './ItemList/ItemList';
import { useLocation, useParams } from 'react-router-dom';
import { getProductos, getProductoCategory} from '../../servicios/productos';
import { ErrorLoading } from '../ErrorLoading/ErrorLoading';


export function ItemListContainer(props){
    const [dataCard, setDataCard] = useState([])
    const [categoryId, setCategoryId] = useState([])
    const [feedBackMsg, setFeedBackMsg] = useState(null)

    let location = useLocation();
    const params = useParams();
    const categoria = params.id
    
  
    
    useEffect( () =>{
        //validar si viene por una categoria
        if(categoryId !== categoria){
            setDataCard([])
            if( (categoria !== undefined && categoria !== null) && String(location.pathname).indexOf("category") !== -1){ 
                getProductoCategory(categoria).then( (respuestaCompletada) => {
                    setDataCard(respuestaCompletada)
                    setCategoryId(categoria)
                    setFeedBackMsg(null) 
                })
                .catch( (respuestaError)=> {
                    setFeedBackMsg(respuestaError.message) 
                })
            }
            else{
                getProductos().then( (respuestaCompletada) => {
                    setDataCard(respuestaCompletada)
                    setFeedBackMsg(null) 
                })
                .catch( (respuestaError)=> {
                    setFeedBackMsg(respuestaError.message) 
                })

            }
        }
    },[categoria, categoryId, location.pathname])

    
    return  (
                feedBackMsg 
                ?
                <ErrorLoading errorMessage={feedBackMsg}/>
                :
                <div className='contenedor-page'>
                    <div className='row'>
                        {props.title !== "" ? <h1 className='titulos'>{props.title}</h1> : "" }
                        <div className={`container ${props.viewProduct} col-element-${props.colElements} col-12`}>
                            <ItemList dataCard={dataCard} typeCard={props.viewProduct} colElements={props.colElements}/>
                        </div>
                        
                    </div>
                </div>
            );
  
}
