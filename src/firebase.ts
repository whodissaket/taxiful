import { initializeApp } from "firebase/app";

const FIREBASE_API_KEY = process.env.REACT_APP_GOOGLE_API_KEY;
const firebaseConfig = {
  apiKey: `${FIREBASE_API_KEY}`,
  authDomain: "ubereum-30106.firebaseapp.com",
  projectId: "ubereum-30106",
  storageBucket: "ubereum-30106.appspot.com",
  messagingSenderId: "970953774097",
  appId: "1:970953774097:web:ac890de290857c8faacdb0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
