// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7k8_Kkn7NoYXaR6bWfyGpuNHBV323WZ0",
  authDomain: "car-doctor-fire.firebaseapp.com",
  projectId: "car-doctor-fire",
  storageBucket: "car-doctor-fire.appspot.com",
  messagingSenderId: "983638664895",
  appId: "1:983638664895:web:d737961dc94e3f1580480a"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);