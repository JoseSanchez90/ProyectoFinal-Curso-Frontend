// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB8hZ06XHrrBm6xaKyVw3Jxb6hDi4-ENqA",
  authDomain: "proyectofrontend-9ed33.firebaseapp.com",
  projectId: "proyectofrontend-9ed33",
  storageBucket: "proyectofrontend-9ed33.appspot.com",
  messagingSenderId: "720036280026",
  appId: "1:720036280026:web:fc65a8d453fffd9771d7e3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);