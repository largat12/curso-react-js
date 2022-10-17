import { useContext, useEffect, useState } from "react";
import { cardContext } from "../../context/cartContext";
import { ItemCartView } from "./ItemCartView/ItemCartView";
import { TotalCart } from "./TotalCart/TotalCart";

export function CartView(){
    const { cart, removeItem, totalPrecioItems} = useContext(cardContext)
    const [totalPrecio, setTotalPrecio] = useState(0)

    function handleRemoveItemCart(itemId){
        removeItem(itemId)
    }

    useEffect(()=>{
        setTotalPrecio(totalPrecioItems())
    },[totalPrecioItems])

    return(
        cart.length !== 0 
        ?   
            <div className="container carrito compras">
                
                <div className="row">
                    <div className="col-8">
                        <div className="container">
                            <div className="row">
                                <div className='col-12 cabecera' >
                                    <div className='container p-0'>
                                        <div className='row'>
                                            <div className='elementos titulo col-6'>
                                                <p>Producto</p>
                                            </div> 
                                            <div className='elementos precio col-2'>
                                                <p>Precio</p>
                                            </div> 
                                            <div className='elementos cantidad col-2'>
                                                <p>Cantidad</p>
                                            </div>
                                            <div className='elementos totalPrecio col-2'>
                                                <p>Subtotal</p>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="row">
                            {
                                cart.map( (cardItem, index) => {
                                    return <ItemCartView key={index} data={cardItem} onClick={handleRemoveItemCart}/>
                                })
                            } 
                            </div>
                        </div>
                    </div>
                    <div className="col-4">
                        <div className="container total carrito">
                            <div className="row">
                                <TotalCart totalPrecio={totalPrecio} />
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        :
        <p>No tienes productos en el carrito</p>
    )

}