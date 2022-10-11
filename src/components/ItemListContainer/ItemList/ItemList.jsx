
import { Item } from "./Item/Item";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight }  from "@fortawesome/free-solid-svg-icons";
export function ItemList(props){
    const cardsProduct      = props.dataCard;
    const cardsType         = props.typeCard === undefined ? "list": props.typeCard;
    

    if(cardsType === "carousel" && cardsProduct.length !== 0 ){
        console.log("cantidad de items", cardsProduct.length)
        const settings = {
            dots: true,
            infinite: true,
            speed: 500,
            slidesToShow: 4,
            slidesToScroll: 1,
            nextArrow: <button className="btn slick-arrow slick-prev"><FontAwesomeIcon icon={faAngleRight} /></button>,
            prevArrow: <button className="btn slick-arrow slick-next"><FontAwesomeIcon icon={faAngleLeft} /></button>,
          };

        return ( 
            <>
            
            
            <Slider {...settings} className={`contenedor-${cardsType} `}>
                {
                    cardsProduct.map( (card, index) => 
                        (
                                <Item  key={index} id={card.id}  imagen={card.imagen} title={card.title} description={card.description} precio={card.price}  stock={card.stock} categoria={card.categoria} typeCard={cardsType}/>
                            
                        )
                    ) 
                } 
            </Slider>
            </>
            
        )
    }
    else{
        return ( 
            cardsProduct.map( (card, index) => { 
                return (
                    <Item  key={index} id={card.id}  imagen={card.imagen} title={card.title} description={card.description} precio={card.price}  stock={card.stock} categoria={card.categoria} typeCard={cardsType}/>
                )
            })   
        )
    }
    
}

