import { initializeApp } from "firebase/app";
import { getFirestore, collection, addDoc, doc, getDoc} from "firebase/firestore";
import { firebaseConfig } from "./configFirebase";
// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const baseDeDatos = getFirestore(FirebaseApp)

export async function createOrden(orden){
    const collectionRef = collection(baseDeDatos, "Ordenes")
    let result = await addDoc(collectionRef, orden)
    if(result.id.length !== 0){
        return result.id
    }
    else{
        throw new Error("Oops... hubo un error a crear su orden, intentalo nuevamente")
    }

    
}
export async function getOrden(id){
    const docRef = doc(baseDeDatos, "Ordenes", id)
    const docResult = await getDoc(docRef)
    if (docResult.exists()) {
        return { id: docResult.id, ...docResult.data()}
    } 
    else{
        throw new Error("Lo sentimos no contamos con esta orden")
    }
}