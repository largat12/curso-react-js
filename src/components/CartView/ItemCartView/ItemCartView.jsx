import { faClose } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import './itemCartView.css'

export function ItemCartView(props){
    const itemCard = props.data;
    function removeItem(){
        const itemId = itemCard.id
        props.onClick(itemId)
    }
    
    return (
        <div className='col-12 item cart' >
            <div className='container p-0'>
                <div className='row'>
                    <div className='eliminar col-1'>
                        <FontAwesomeIcon icon={faClose} onClick={removeItem}/>
                    </div>
                    <div className='elemento imagen col-2'>
                        <img src={itemCard.imagen} alt={itemCard.title}/>
                    </div> 
                    <div className='elemento titulo col-3'>
                        <p>{itemCard.title}</p>
                    </div> 
                    <div className='elemento precio col-2'>
                        <p>$ { new Intl.NumberFormat("es-CO").format(Math.trunc(itemCard.precio)) }</p>
                    </div> 
                    <div className='elemento cantidad col-2'>
                        <p>{itemCard.countProduct}</p>
                    </div>
                    <div className='elemento totalPrecio col-2'>
                        <p>$ { new Intl.NumberFormat("es-CO").format(Math.trunc(itemCard.totalPrecio)) }</p>
                    </div>
                    
                </div>
            </div>
        </div>
        )
}