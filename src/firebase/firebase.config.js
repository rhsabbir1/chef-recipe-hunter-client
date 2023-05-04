// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDVkAcvuj2u5cy1V_KNQVHIs5n8qOrj9TY",
  authDomain: "chif-hire.firebaseapp.com",
  projectId: "chif-hire",
  storageBucket: "chif-hire.appspot.com",
  messagingSenderId: "229463456941",
  appId: "1:229463456941:web:b7b85f2e3cf6e7b4835a24"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;