
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDqx87d6yhcxuOCzbuElX5RezL0tij6PSI",
    authDomain: "proyectofirebaseutn.firebaseapp.com",
    projectId: "proyectofirebaseutn",
    storageBucket: "proyectofirebaseutn.firebasestorage.app",
    messagingSenderId: "923952337515",
    appId: "1:923952337515:web:d2cef076af31e2c4d4572e",
    measurementId: "G-DEQXSNKMVP"
};


const app = initializeApp(firebaseConfig);

const database = getFirestore(app);

export default database;