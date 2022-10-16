import './item.css'
import { ItemCount } from './ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext} from 'react';
import { cardContext } from '../../../../context/cartContext';

export function Item(props){
  const [textAddCart, setTextAddCart] = useState([{}])
  useEffect(()=> {
      setTextAddCart({"state":true})
  }, [])
  const {addItem} = useContext(cardContext)
    
  function onAdd(countProduct, totalPrecio){
      if(textAddCart.state){
          setTextAddCart({"state":false})
          let itemAddToCard = props
          addItem(itemAddToCard, countProduct, totalPrecio)
      }
      else{
          setTextAddCart({"state":true})
      }
  }


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
          {props.typeCard === "carousel" ? content : ""}
        </div>
        <div className="content">
          {props.typeCard === "details" ? content : ""}
          <h6 className='precio'>$ {new Intl.NumberFormat("es-CO").format(Math.trunc(props.precio))}</h6>

          
          <ItemCount onAddClick={onAdd} stock={props.stock} precio={props.precio} textAddCart={textAddCart}/>
        </div>
      
    </div>
       
    )  
  
  }