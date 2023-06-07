// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBA0L9BK4w1sfyozIhGYEIIjUYYlXn0lxM",
  authDomain: "projetohistoria-f1c5c.firebaseapp.com",
  projectId: "projetohistoria-f1c5c",
  storageBucket: "projetohistoria-f1c5c.appspot.com",
  messagingSenderId: "456703684553",
  appId: "1:456703684553:web:f9740791f07e0cee638218",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const auth = getAuth(app);
