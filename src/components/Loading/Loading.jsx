import './loading.css'
import { CardDetailsLoading } from "./CardDetailstLoading/CardDetailstLoading";
import { CardLoading } from "./CardLoading/CardLoading";

export function Loading(props){
    const typeElement   = props.typeElement;
    const cardsType     = props.cardsType;
    const colElements   = props.colElements;

    if(typeElement === "producto"){
        let cantidadELements = 1;
        let listProductos = []
        // productos tipo lista
        if(cardsType === "carousel"){
            for(cantidadELements; cantidadELements <= parseInt(colElements); cantidadELements++){
                listProductos.push(<CardLoading key={cantidadELements}/>)
            }
            return listProductos; 
        }
        // productos tipo carrusel
        if(cardsType === "list"){
            for(cantidadELements; cantidadELements <= parseInt(colElements) * 2; cantidadELements++){
                listProductos.push(<CardLoading key={cantidadELements}/>)
            }
            return listProductos
        }
        // producto tipo details
        if(cardsType === "details"){
            for(cantidadELements; cantidadELements <= parseInt(colElements); cantidadELements++){
                listProductos.push(<CardDetailsLoading key={cantidadELements}/>)
            }
            return listProductos
        }

    }
    return( <p>Cargando elementos </p>)
}