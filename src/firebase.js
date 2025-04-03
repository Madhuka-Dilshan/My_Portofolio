import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc, getDocs } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDOmUrDdfFx6vGi3uWx7U0rzbdjmtuJz9s",
  authDomain: "my-portofolio-c120e.firebaseapp.com",
  projectId: "my-portofolio-c120e",
  storageBucket: "my-portofolio-c120e.firebasestorage.app",
  messagingSenderId: "814205643221",
  appId: "1:814205643221:web:9602064ebe77bde54db55c",
  measurementId: "G-ZJT1MC9G6H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };