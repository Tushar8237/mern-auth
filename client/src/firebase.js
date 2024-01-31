// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-auth-64e11.firebaseapp.com",
  projectId: "mern-auth-64e11",
  storageBucket: "mern-auth-64e11.appspot.com",
  messagingSenderId: "1040257827996",
  appId: "1:1040257827996:web:b38fb9089ba423874fd959"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);