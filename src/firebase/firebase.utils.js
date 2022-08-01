import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore/lite";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

// TODO: Replace the following with your app's Firebase project configuration
const firebaseConfig = {
  apiKey: "AIzaSyDYk_LZb-IB9tnhVeRVhkrjFVZN35ACw8Q",
  authDomain: "renterz-01.firebaseapp.com",
  projectId: "renterz-01",
  storageBucket: "renterz-01.appspot.com",
  messagingSenderId: "66675684295",
  appId: "1:66675684295:web:d77d4693577e1313cd9fe2",
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export const auth = getAuth();
