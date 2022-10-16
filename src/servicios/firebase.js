import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs, doc, getDoc, query, where} from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAjwd-FVa8CSS8secNRwbMDn8a8SZ0xNhY",
    authDomain: "react-merkopolis.firebaseapp.com",
    projectId: "react-merkopolis",
    storageBucket: "react-merkopolis.appspot.com",
    messagingSenderId: "691220531075",
    appId: "1:691220531075:web:749de4e74a2b1119a158b6"
  };
  
  // Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const baseDeDatos = getFirestore(FirebaseApp)


export async function getProductos(){
    const collectionRef = collection(baseDeDatos, "Productos")
    let result = await getDocs(collectionRef);
    if(result.docs.length !== 0){
        let productos = result.docs.map( (doc) => {
            return ( {id: doc.id, ...doc.data()}  )   
        })
        return productos
    }
    else{
        throw new Error("Lo sentimos no contamos con estos productos")
    }

   
}

export async function getProducto(id){

    const docRef = doc(baseDeDatos, "Productos", id)
    const docResult = await getDoc(docRef)
   
    if (docResult.exists()) {
        return { id: docResult.id, ...docResult.data()}
    } 
    else{
        throw new Error("Lo sentimos no contamos con este producto")
    }

}

export async function getProductoCategory(category){
    const collectionRef = collection(baseDeDatos, "Productos")
    const searchProducts = query(collectionRef, where("categoria", "==", category))
    let result = await getDocs(searchProducts);

    if(result.docs.length !== 0){
        let productosCategory = result.docs.map( (doc) => {
            return ( {id: doc.id, ...doc.data()}  )   
        })
        return productosCategory
    }
    else{
        throw new Error("Lo sentimos no contamos con esta categoria")
    }

    
    

}
