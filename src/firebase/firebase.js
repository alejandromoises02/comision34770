import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyAfohLHv5sgVGo0TytxV_oAeCsFwazM92Q",
  authDomain: "comision34770.firebaseapp.com",
  projectId: "comision34770",
  storageBucket: "comision34770.appspot.com",
  messagingSenderId: "836304866034",
  appId: "1:836304866034:web:baafa2c02503e43b6ade6b"
};


const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);