import './cartWidget.css';

//importacion de la libreria
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//importacion del icono a utlizar
import { faCartShopping }  from "@fortawesome/free-solid-svg-icons";
//importacion de listado de iconos para visualizar
import * as iconList from "@fortawesome/free-solid-svg-icons";

export function CartWidget(){
    console.log(iconList)
    return(
        <div className="cardHeader" id="cardIconHeader">
            <FontAwesomeIcon icon={faCartShopping} />
        </div>
    )

}