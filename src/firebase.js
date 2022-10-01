import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyBNi0k9HnfoFQCXTatzVXLSPc0ap1YZolc",
  authDomain: "database-shoes.firebaseapp.com",
  projectId: "database-shoes",
  storageBucket: "database-shoes.appspot.com",
  messagingSenderId: "1095861799146",
  appId: "1:1095861799146:web:ef8a2567f2fd4116c8ef93",
  measurementId: "G-H91TVKVL5P"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth()
export const storage = getStorage()
export const db = getFirestore()
