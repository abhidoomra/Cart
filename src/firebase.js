import { initializeApp } from "firebase/app"
import { getFirestore } from "@firebase/firestore"; 
const firebaseApp = { 
    /* config */ 
    apiKey: "AIzaSyCSi4eCqGQjs3IhQS231dCGaqQM2OzgDH4",
    authDomain: "cart-app-13a98.firebaseapp.com",
    projectId: "cart-app-13a98",
    storageBucket: "cart-app-13a98.appspot.com",
    messagingSenderId: "41986755835",
    appId: "1:41986755835:web:3b5767582aad969b29745e"
};
const app=initializeApp(firebaseApp);
export default getFirestore();