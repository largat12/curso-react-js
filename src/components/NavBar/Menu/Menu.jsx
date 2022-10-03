import { Link } from 'react-router-dom';
import { itemsMenu } from '../../../Helpers/itemsMenu';
//importacion de la libreria
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
//importacion del icono a utlizar
import { faAngleDown }  from "@fortawesome/free-solid-svg-icons";

import './menu.css';


export function Menu(props){
    const elementMenu =   itemsMenu ;

    
    

    return (
        <nav id='menu' data-element="false">
            <ul>
                {elementMenu.map( (element, index) => {
                    var elementsSubMenu = "";
                    var iconElemntSubMenu = "";
                    if(element.subMenu){
                        elementsSubMenu = element.itemSubMenu.map( (elementSubMenu, index) => {
                            return <li key={index}><Link to={elementSubMenu.href}><span>{elementSubMenu.title}</span></Link></li>
                        })
                        elementsSubMenu = <><ul className='navSubMenu'>{elementsSubMenu}</ul></>
                        iconElemntSubMenu = <FontAwesomeIcon icon={faAngleDown} />;
                    }
                    return  <li key={index} className={element.subMenu ? "sub-menu" : ""} >
                                <Link to={element.href}>
                                    <span>{element.title}</span>
                                    {iconElemntSubMenu}
                                </Link>
                                {elementsSubMenu}
                            </li>
                }) }
            </ul>
        </nav>
    )
}