// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmZ9v-qZP9WRVX3mGw0mD4S8VHAvPPTSU",
  authDomain: "game-store-account.firebaseapp.com",
  projectId: "game-store-account",
  storageBucket: "game-store-account.firebasestorage.app",
  messagingSenderId: "728174152397",
  appId: "1:728174152397:web:67f99baf92364733457784",
  measurementId: "G-SGKSK68K1B"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);