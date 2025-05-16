import { initializeApp } from "firebase/app";
import { 
    getAuth,
    createUserWithEmailAndPassword ,
    signInWithEmailAndPassword 

 } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA4g-E_ZSSnatWH0zcH-6RP-lKSt9ZAqt4",
  authDomain: "expense-tracker-6becb.firebaseapp.com",
  projectId: "expense-tracker-6becb",
  storageBucket: "expense-tracker-6becb.firebasestorage.app",
  messagingSenderId: "441504178825",
  appId: "1:441504178825:web:756f0c3cc532c092cb5c58",
  measurementId: "G-JYHTRWREND"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export{
    auth,
    createUserWithEmailAndPassword ,
    signInWithEmailAndPassword 
}