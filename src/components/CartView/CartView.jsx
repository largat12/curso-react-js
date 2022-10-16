import { useContext } from "react";
import { cardContext } from "../../context/cartContext";

export function CartView(){
    const { cart } = useContext(cardContext)
    console.log("cart", cart) 

}