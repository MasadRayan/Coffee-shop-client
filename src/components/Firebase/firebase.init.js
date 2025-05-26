import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";


const firebaseConfig = {
  apiKey: "AIzaSyBw0Xw7ACPyQ3pO2Ap2YN8vW1a-tBee2dI",
  authDomain: "coffee-shop-app-a1395.firebaseapp.com",
  projectId: "coffee-shop-app-a1395",
  storageBucket: "coffee-shop-app-a1395.firebasestorage.app",
  messagingSenderId: "41563698272",
  appId: "1:41563698272:web:04a0d6cb67f7d3d351ff05"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);