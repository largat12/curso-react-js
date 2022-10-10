import './cartWidget.css';
//importacion de la libreria
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//importacion del icono a utlizar
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";

//importacion de listado de iconos para visualizar
//import * as iconList from "@fortawesome/free-solid-svg-icons";
import { useContext} from 'react';
import { cardContext } from '../../../context/cartContext';
import { useState } from 'react';
import { useEffect } from 'react';


export function CartWidget(){
    const [count, setCount] = useState(0)
    const {totalItemsCount} = useContext(cardContext)
    useEffect( ()=>{
        
        setCount(totalItemsCount())
    },[totalItemsCount] )
   
    
    return(
        <div className='contentCardHeader' id="cardIconHeader">
            <div className="cardHeader" >
                <FontAwesomeIcon icon={faCartShopping} />
            </div>
            {count === 1 ? <span className='countTotal'>{count} item</span> : <span className='countTotal'>{count} items</span>}
        </div>
    )

}