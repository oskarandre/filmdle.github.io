// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

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
const analytics = getAnalytics(app);

export { app, analytics };
