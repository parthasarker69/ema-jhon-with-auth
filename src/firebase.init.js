// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDW-mHSabii9Npfwz2Be7x5ca2WRWtTles",
    authDomain: "ema-john-with-auth-7b565.firebaseapp.com",
    projectId: "ema-john-with-auth-7b565",
    storageBucket: "ema-john-with-auth-7b565.appspot.com",
    messagingSenderId: "95396432404",
    appId: "1:95396432404:web:ec9ab963b096ecd84d7501"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export default auth;