

import './item.css'
import { ItemCount } from './ItemCount/ItemCount';
import { Link } from 'react-router-dom';
export function Item(props){
  let content = <>
                  <Link  to={"/item/"+props.id}>
                    <h3 className='titulo-card-name'>{props.title}</h3>
                  </Link>
                  <h5 className='titulo-card'>Valor por {props.description.toLowerCase()}</h5>
                </>;
  

  return(
    <div key={props.id} className={`card ${props.typeCard}`}>
        <div className="content">
          <Link  to={"/item/"+props.id}>
            <img className='imagen' src={props.imagen} alt={props.title}/>
          </Link>
          {props.typeCard === "list" ? content : ""}
          
        </div>
        <div className="content">
          {props.typeCard === "details" ? content : ""}
          <h6 className='precio'>$ {new Intl.NumberFormat("es-CO").format(Math.trunc(props.precio))}</h6>
          <ItemCount stock={props.stock} precio={props.precio}/>
        </div>
      
    </div>
       
    )  
  
  }