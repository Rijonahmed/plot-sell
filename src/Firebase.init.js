// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCtlet8vruO5NW1982Lf4qV2zquiPzwZhg",
  authDomain: "purbachal-plot-sell.firebaseapp.com",
  projectId: "purbachal-plot-sell",
  storageBucket: "purbachal-plot-sell.appspot.com",
  messagingSenderId: "879052004946",
  appId: "1:879052004946:web:23cc98e5dee29dbf1d098b"
};

// Initialize Firebase

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)
export default auth;