// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBSPZ2DZg5SI7b3uE2e_dzBccUXq5AqWZA",
  authDomain: "vite-contact-3f674.firebaseapp.com",
  projectId: "vite-contact-3f674",
  storageBucket: "vite-contact-3f674.firebasestorage.app",
  messagingSenderId: "858778873288",
  appId: "1:858778873288:web:02cc66137ee01ff28a24fd"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);
 export const db = getFirestore(app);