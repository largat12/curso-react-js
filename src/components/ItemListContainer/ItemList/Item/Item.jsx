import './item.css'
import { ItemCount } from './ItemCount/ItemCount';
import { Link } from 'react-router-dom';
import { useState, useEffect, useContext} from 'react';
import { cardContext } from '../../../../context/cartContext';

export function Item(props){
  const contentItem = {...props}
  // cuando viene por carrusel trae unos estilos propios en los props, con esto los eliminamos para que no nos afecten en la construccion del los elementos
  if(contentItem.typeCard === "carousel"){
    delete contentItem.style
    delete contentItem.tabIndex
  }
  const [textAddCart, setTextAddCart] = useState([{}])
  useEffect(()=> {
      setTextAddCart({"state":true})
  }, [])
  const {addItem} = useContext(cardContext)
    
  function onAdd(countProduct, totalPrecio){
      if(textAddCart.state){
          setTextAddCart({"state":false})
          let itemAddToCard = contentItem
          addItem(itemAddToCard, countProduct, totalPrecio)
      }
      else{
          setTextAddCart({"state":true})
      }
  }


  let content = <>
                  <Link  to={"/item/"+contentItem.id}>
                    <h3 className='titulo-card-name'>{contentItem.title}</h3>
                  </Link>
                  <h5 className='titulo-card'>Valor por {contentItem.description.toLowerCase()}</h5>
                </>;
  
  return(
    <div key={contentItem.id} className={`card ${contentItem.typeCard}`}>
        <div className="content">
          <Link  to={"/item/"+contentItem.id}>
            <img className='imagen' src={contentItem.imagen} alt={contentItem.title}/>
          </Link>
          {contentItem.typeCard === "list" ? content : ""}
          {contentItem.typeCard === "carousel" ? content : ""}
        </div>
        <div className="content">
          {contentItem.typeCard === "details" ? content : ""}
          <h6 className='precio'>$ {new Intl.NumberFormat("es-CO").format(Math.trunc(contentItem.precio))}</h6>

          
          <ItemCount onAddClick={onAdd} stock={contentItem.stock} precio={contentItem.precio} textAddCart={textAddCart}/>
        </div>
      
    </div>
       
    )  
  
  }