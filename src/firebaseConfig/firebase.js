// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from '@firebase/firestore';

//credenciales mias para mi base de datos
const firebaseConfig = {
  apiKey: "AIzaSyDGLQ4WD-qO0DoTUecfhFB2JJ4wgB6W4lw",
  authDomain: "crudsunflowerjeans.firebaseapp.com",
  projectId: "crudsunflowerjeans",
  storageBucket: "crudsunflowerjeans.appspot.com",
  messagingSenderId: "626595606590",
  appId: "1:626595606590:web:b139b568bcd956119ee16f"
};

// Initialize Firebase para como parametro mis credenciales que cree
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app); 