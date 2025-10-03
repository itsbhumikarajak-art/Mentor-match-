// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"; // Import Firestore

// Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAhQ_NRcJZub8tGZlhTur_dXhVMxxD96j0",
  authDomain: "mentorarea-ad924.firebaseapp.com",
  projectId: "mentorarea-ad924",
  storageBucket: "mentorarea-ad924.firebasestorage.app",
  messagingSenderId: "429158103008",
  appId: "1:429158103008:web:fb3a775c62c0c415609d85"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Firebase services
const storage = getStorage(app);
const auth = getAuth(app);
const db = getFirestore(app);

// Export everything in a single statement
export { db, app, storage, auth };
