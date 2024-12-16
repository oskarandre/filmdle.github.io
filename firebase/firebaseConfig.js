// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA3c-5o5-Jl-ij12Z1U0flU2sB0YhiI0A4",
  authDomain: "tddd27-filmdle.firebaseapp.com",
  projectId: "tddd27-filmdle",
  storageBucket: "tddd27-filmdle.appspot.com",
  messagingSenderId: "541132083150",
  appId: "1:541132083150:web:517e36b23e6b28bdd7259f",
  measurementId: "G-YHVQB6LPFZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const db = getFirestore(app);


export { app, auth, db};
