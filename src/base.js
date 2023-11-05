// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCztC6nm9Awc6fOfkpJNFDhka7uXoCTdQ8",
  authDomain: "fir-react-auth-8b101.firebaseapp.com",
  projectId: "fir-react-auth-8b101",
  storageBucket: "fir-react-auth-8b101.appspot.com",
  messagingSenderId: "150027102792",
  appId: "1:150027102792:web:266a4442f62b9746c6067d",
  measurementId: "G-NC2GFM4KJE"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Initialize Firebase Authentication and get a reference to the service
const auth = getAuth(app);
