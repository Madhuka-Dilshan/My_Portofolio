import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyDOmUrDdfFx6vGi3uWx7U0rzbdjmtuJz9s",
    authDomain: "my-portofolio-c120e.firebaseapp.com",
    projectId: "my-portofolio-c120e",
    storageBucket: "my-portofolio-c120e.firebasestorage.app",
    messagingSenderId: "814205643221",
    appId: "1:814205643221:web:9602064ebe77bde54db55c",
    measurementId: "G-ZJT1MC9G6H"
  };

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };