import { API_URL, API_KEY } from '@env';
import { getDatabase } from "firebase/database";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: API_KEY,
  authDomain: "shoppinglist-firebase-c2576.firebaseapp.com",
  databaseURL: API_URL,
  projectId: "shoppinglist-firebase-c2576",
  storageBucket: "shoppinglist-firebase-c2576.appspot.com",
  messagingSenderId: "129281613278",
  appId: "1:129281613278:web:47a7fa7d13b5461dd6914f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

//Initialize database
export const db = getDatabase(app);