import './card.css'

export function Card(props){
  const elementos = props.dataCard;
  const typeCard = props.dataTypeCard;

  const LogoPuntosColmbia = "https://www.viajesexito.com/Portals/1/Skins/renovacion/img/p-colombia.png"
  console.log(elementos)
    return(
      elementos.map( element => 
        <div className={`card card-${typeCard.toLowerCase()}`}>
            <div className="content">
              <img className='imagen' src={element.imagen} alt={`Tiquetes a ${element.destino}, saliendo desde ${element.origen}`}/>
              <h3 className='titulo-card-name'>Tiquetes a {element.destino}</h3>
              <h5 className='titulo-card'>Saliendo desde {element.origen}</h5>
            </div>
            <div className="content">
              <p>Vuelo por trayecto desde*</p>
              <h6 className='precio'>$ {new Intl.NumberFormat("es-CO").format(Math.trunc(element.precio))}</h6>
              <div className="puntos"><p>Acumulas {element.puntos} <img src={LogoPuntosColmbia} alt="puntos-colombia"/></p></div>
            </div>
        </div>
      )  
    );
  
  }