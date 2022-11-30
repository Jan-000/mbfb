// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDYs7M__gb-TBO59GLV0lnUB5muBNf-2PQ",
  authDomain: "qweqw-88162.firebaseapp.com",
  projectId: "qweqw-88162",
  storageBucket: "qweqw-88162.appspot.com",
  messagingSenderId: "986905715793",
  appId: "1:986905715793:web:8d916ca49e439acfe20470",
  measurementId: "G-VEND5JGF9K"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);