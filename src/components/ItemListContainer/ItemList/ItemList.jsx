import { Item } from "./Item/Item";
import Slider from "react-slick";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";
import { Loading } from "../../Loading/Loading";
export function ItemList(props) {
  const cardsProduct = props.dataCard;
  const cardsType = props.typeCard === undefined ? "list" : props.typeCard;

  //llamado tipo carrusel
  if (cardsType === "carousel" && cardsProduct.length !== 0) {
    const SlickArrowRight = ({ currentSlide, slideCount, ...props }) => (
      <button
        {...props}
        className={
          "slick-prev slick-arrow" +
          (currentSlide === 0 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === 0 ? true : false}
        type="button"
      >
        <FontAwesomeIcon icon={faAngleLeft} />
      </button>
    );
    const SlickArrowLeft = ({ currentSlide, slideCount, ...props }) => (
      <button
        {...props}
        className={
          "slick-next slick-arrow" +
          (currentSlide === slideCount - 1 ? " slick-disabled" : "")
        }
        aria-hidden="true"
        aria-disabled={currentSlide === slideCount - 1 ? true : false}
        type="button"
      >
        <FontAwesomeIcon icon={faAngleRight} />
      </button>
    );
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 4,
      slidesToScroll: 1,
      nextArrow: <SlickArrowLeft />,
      prevArrow: <SlickArrowRight />,
    };
    
    return (
      
      <Slider {...settings} className={`contenedor-${cardsType} `}>
        {cardsProduct.map((card) => {
          return (<Item
            key={card.id}
            id={card.id}
            imagen={card.imagen}
            title={card.title}
            description={card.description}
            precio={card.price}
            stock={card.stock}
            categoria={card.categoria}
            typeCard={cardsType}
          />)
          }
        )}
      </Slider>
    );
  }
  //llamado tipo list
  if (cardsType === "list" && cardsProduct.length !== 0) {
    return cardsProduct.map((card, index) => {
      return (
        <Item
          key={index}
          id={card.id}
          imagen={card.imagen}
          title={card.title}
          description={card.description}
          precio={card.price}
          stock={card.stock}
          categoria={card.categoria}
          typeCard={cardsType}
        />
      );
    });
  }
  //llamado tipo details
  if (cardsType === "details" && cardsProduct.length !== 0) {
    return cardsProduct.map((card, index) => {
      return (
        <Item
          key={index}
          id={card.id}
          imagen={card.imagen}
          title={card.title}
          description={card.description}
          precio={card.price}
          stock={card.stock}
          categoria={card.categoria}
          typeCard={cardsType}
        />
      );
    });
  }

  else{
    return <Loading typeElement="producto" cardsType={cardsType} colElements={props.colElements}/>
  }




}
