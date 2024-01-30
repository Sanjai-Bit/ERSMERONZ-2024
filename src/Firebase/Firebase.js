// Import the functions you need from the SDKs you need
import { initializeApp  } from "firebase/app";
import { getFirestore  } from "firebase/firestore";
import { getAuth, GoogleAuthProvider , getDatabase } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCvW289r70sFgrT_XEyZA_sUXccNP6beoo",
  authDomain: "bitevets.firebaseapp.com",
  projectId: "bitevets",
  storageBucket: "bitevets.appspot.com",
  messagingSenderId: "1094680734928",
  appId: "1:1094680734928:web:eae84d28f815eb3be482d5",
  measurementId: "G-DX22MFLKJS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const db = getFirestore(app)
export  const provider =  new GoogleAuthProvider()
