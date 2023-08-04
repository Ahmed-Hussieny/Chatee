
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
const firebaseConfig = {
  apiKey: "AIzaSyA-I6-J1wECaUu1Wvj6443n9teDNjEe5KU",
  authDomain: "chat-71d4b.firebaseapp.com",
  projectId: "chat-71d4b",
  storageBucket: "chat-71d4b.appspot.com",
  messagingSenderId: "390428990897",
  appId: "1:390428990897:web:e7d290014320b06c697190"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();
