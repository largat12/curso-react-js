
import { Card } from "./Item/Item";
export function ItemList(props){

    const cardsProduct      = props.dataCard;
    const cardsTypeProducto = props.dataTypeCard;
    
    return ( 
            cardsProduct.map( (card, index) => { 
                return <Card key={index} type={cardsTypeProducto} pictureUrl={card.pictureUrl} destino={card.title} origen={card.description} imagen={card.imagen}  precio={card.price} puntos={card.puntos} stock={card.stock} categoria={card.categoria} />
            })   
    )
}

