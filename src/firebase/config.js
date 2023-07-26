// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCC6tHjViliTHgYiC6r_23OCgsvJhiEK9c",
  authDomain: "gentlement-s-club.firebaseapp.com",
  projectId: "gentlement-s-club",
  storageBucket: "gentlement-s-club.appspot.com",
  messagingSenderId: "43452935632",
  appId: "1:43452935632:web:1b31b8be85fd4d09afddd5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);