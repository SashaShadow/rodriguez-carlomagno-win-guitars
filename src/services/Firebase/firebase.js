// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getFirestore } from "firebase/firestore";



// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDr0dMZugL01oiYjlv3o6C1NT6ylIcjJgk",

  authDomain: "win-guitars.firebaseapp.com",

  projectId: "win-guitars",

  storageBucket: "win-guitars.appspot.com",

  messagingSenderId: "556077879009",

  appId: "1:556077879009:web:2ee6b29822e4fe3df6b1a0",

  measurementId: "G-SBF4XPXEVM"

};


// Initialize Firebase
const app = initializeApp(firebaseConfig);


//Initialize Firestore (referencia a base de datos)
export const firestoreDb = getFirestore(app);

