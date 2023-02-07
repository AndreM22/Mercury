import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import {getFirestore} from "firebase/firestore/lite"

const firebaseConfig = {
  apiKey: "AIzaSyDzczL4W_PEVpptUo_G7ASNjzdsLNyuawk",
  authDomain: "mercury-b22d7.firebaseapp.com",
  projectId: "mercury-b22d7",
  storageBucket: "mercury-b22d7.appspot.com",
  messagingSenderId: "936418393209",
  appId: "1:936418393209:web:050cfc512e3e9d157c28a8"
};

export const initFirebase = initializeApp(firebaseConfig);
export const auth = getAuth(initFirebase);
export const db = getFirestore(initFirebase);
