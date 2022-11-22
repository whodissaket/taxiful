import { initializeApp } from "firebase/app";

const FIREBASE_API_KEY = "AIzaSyBqGGk_x_afB6l1U9feD-uKObKKdeToNCg";
const firebaseConfig = {
  apiKey: `AIzaSyBqGGk_x_afB6l1U9feD-uKObKKdeToNCg`,
  authDomain: "ubereum-30106.firebaseapp.com",
  projectId: "ubereum-30106",
  storageBucket: "ubereum-30106.appspot.com",
  messagingSenderId: "970953774097",
  appId: "1:970953774097:web:ac890de290857c8faacdb0",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
