
import './item.css'
import { ItemCount } from './ItemCount/ItemCount';

export function Card(props){
  const LogoPuntosColmbia = "https://www.viajesexito.com/Portals/1/Skins/renovacion/img/p-colombia.png"
  return(
        <div key={props.id} className={`card card-${props.type.toLowerCase()}`}>
            <div className="content">
              <img className='imagen' src={props.pictureUrl} alt={`Tiquetes a ${props.destino}, saliendo desde ${props.origen}`}/>
              <h3 className='titulo-card-name'>Tiquetes a {props.destino}</h3>
              <h5 className='titulo-card'>Saliendo desde {props.origen}</h5>
            </div>
            <div className="content">
              <p>Vuelo por trayecto desde*</p>
              <h6 className='precio'>$ {new Intl.NumberFormat("es-CO").format(Math.trunc(props.precio))}</h6>
              <div className="puntos"><p>Acumulas {props.puntos} <img src={LogoPuntosColmbia} alt="puntos-colombia"/></p></div>
              <ItemCount stock={props.stock}/>
            </div>
        </div>
    )  
  
  }