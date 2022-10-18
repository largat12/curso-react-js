import { initializeApp } from "firebase/app";
import { getFirestore, collection, query, where, getDocs} from "firebase/firestore";
import { firebaseConfig } from "./configFirebase";

// Initialize Firebase
const FirebaseApp = initializeApp(firebaseConfig);
const baseDeDatos = getFirestore(FirebaseApp)

export async function getCupon(cupon){
    const collectionRef = collection(baseDeDatos, "Cupones")
    const searchCupon = query(collectionRef, where("cupon", "==", cupon))
    let result = await getDocs(searchCupon)
    if(result.docs.length !== 0){
        let resultCupon = result.docs.map( (doc) => {
            return ( {id:doc.id, ...doc.data()})
        } )
        return resultCupon
        
    }
    else{
        throw new Error(false)
    }

}