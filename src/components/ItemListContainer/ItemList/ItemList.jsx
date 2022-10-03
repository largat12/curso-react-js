
import { Item } from "./Item/Item";

export function ItemList(props){
    const cardsProduct      = props.dataCard;
    const cardsType         = props.typeCard == undefined ? "list": props.typeCard;
    console.log("cardsType", cardsType)

    


    return ( 
        cardsProduct.map( (card, index) => { 
            return (
                <Item  key={index} id={card.id}  imagen={card.imagen} title={card.title} description={card.description} precio={card.price}  stock={card.stock} categoria={card.categoria} typeCard={cardsType}/>
            )
        })   
    )
}

