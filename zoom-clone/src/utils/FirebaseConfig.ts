// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {collection,getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAEnZC9iDztARSjE6MqBwbQDlBC8uM3zrw",
  authDomain: "zoom-clone-2bbad.firebaseapp.com",
  projectId: "zoom-clone-2bbad",
  storageBucket: "zoom-clone-2bbad.appspot.com",
  messagingSenderId: "1051966561021",
  appId: "1:1051966561021:web:f083425980617787ee7c94",
  measurementId: "G-REFM6YYMCJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);
export const firebaseDB = getFirestore(app);