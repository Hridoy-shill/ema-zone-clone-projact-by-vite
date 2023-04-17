// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyASw31Ml8kRhszPkqFvtXgRQySrxIWbDbE",
  authDomain: "ema-jon-with-firebase.firebaseapp.com",
  projectId: "ema-jon-with-firebase",
  storageBucket: "ema-jon-with-firebase.appspot.com",
  messagingSenderId: "428779712064",
  appId: "1:428779712064:web:a019230f19b91361e4f9a5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app;