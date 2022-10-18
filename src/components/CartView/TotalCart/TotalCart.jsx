import { Link } from 'react-router-dom'
import './totalCart.css'

export function TotalCart(props){
    const cupon             = props.cuponPrecio
    const precioSubTotal    = props.subTotalPrecio
    const precioTotal       = props.totalPrecio
    let cuponContenido = ''
    if(cupon !== 0 && typeof cupon === 'object'){
        cuponContenido = <div className="cupon">
                            <div className="texto">Cupón: {cupon.nombre}</div>
                            <div className="valor">$ {new Intl.NumberFormat("es-CO").format(Math.trunc(cupon.valor))}</div>
                        </div>

    }

    return( 
            <div className="col-12">
                <div className="titulo">
                    <p>Total del carrito</p> 
                </div>
                <div className="subTotal">
                    <div className="texto">Subtotal</div>
                    <div className="valor">$ {new Intl.NumberFormat("es-CO").format(Math.trunc(precioSubTotal))}</div>
                </div>
                {cuponContenido}
                <div className="total">
                    <div className="texto">total</div>
                    <div className="valor">$ {new Intl.NumberFormat("es-CO").format(Math.trunc(precioTotal))}</div>
                </div>
                <div className='btn finalizar'>
                    <Link to='/checkout/'>Finalizar Compra</Link>
                </div>
            </div>
            
        )
}