import { Link } from 'react-router-dom'
import './totalCart.css'

export function TotalCart(props){
    const precio = props.totalPrecio

    return( 
            <div className="col-12">
                <div className="titulo">
                    <p>Total del carrito</p> 
                </div>
                <div className="subTotal">
                    <div className="texto">Subtotal</div>
                    <div className="valor">$ {new Intl.NumberFormat("es-CO").format(Math.trunc(precio))}</div>
                </div>
                <div className="total">
                    <div className="texto">total</div>
                    <div className="valor">$ {new Intl.NumberFormat("es-CO").format(Math.trunc(precio))}</div>
                </div>
                <div className='btn finalizar'>
                    <Link to='/checkout/'>Finalizar Compra</Link>
                </div>
            </div>
            
        )
}