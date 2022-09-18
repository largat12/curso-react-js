
import './itemListContainer.css'
import { Card } from "./Card/Card";

export function ItemListContainer(props){
    const typeCard = 'Vuelos'
    const vuelos =  [{
                        'imagen':'https://www.viajesexito.com/Portals/1/Images/productos/aerolineas/destinos/default.jpg',
                        'destino':'Ibague',
                        'origen': 'Bógota',
                        'precio': '115900',
                        'puntos': '33'
                    },
                    {
                        'imagen':'https://www.viajesexito.com/portals/1/Images/productos/aerolineas/destinos/Cali/Cali-1.jpg',
                        'destino':'Cali',
                        'origen': 'Medellín',
                        'precio': '119110',
                        'puntos': '34'
                    },
                    {
                        'imagen':'https://www.viajesexito.com/portals/1/Images/productos/aerolineas/destinos/Bucaramanga/Bucaramanga.jpg',
                        'destino':'Bucaramanga',
                        'origen': 'Medellín',
                        'precio': '119840',
                        'puntos': '34'
                    },
                    {
                        'imagen':'https://www.viajesexito.com/Portals/1/Images/productos/aerolineas/destinos/medellin/Medellin-2.jpg',
                        'destino':'Medellín',
                        'origen': 'Montería',
                        'precio': '119840',
                        'puntos': '34'
                    }]


    return(
        <div className='contenedor-page'>
            <div className='row'>
                <h1 className='titulos'>{props.title}</h1>
                <p className='descripcion'>{props.description}</p>
                <div className='container-card'>
                    <Card dataCard={vuelos} dataTypeCard={typeCard}/> 
                </div>
                  
            </div>
        </div>
      
    );
  
}
