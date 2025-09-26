// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyC_bbSkAK8FbO9kNrjeMe_mxLrOk6l5Yhg",
    authDomain: "mijolnir-a1df5.firebaseapp.com",
    projectId: "mijolnir-a1df5",
    storageBucket: "mijolnir-a1df5.firebasestorage.app",
    messagingSenderId: "87944804075",
    appId: "1:87944804075:web:e7eb34aad202c0d63970ae",
    measurementId: "G-6Z5WC7XKWJ"
};
// Initialisation
const app = initializeApp(firebaseConfig);
// Auth
export const auth = getAuth(app);
export const db = getFirestore(app);
