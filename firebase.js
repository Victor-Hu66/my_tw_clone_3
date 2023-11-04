// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration

const firebaseConfig = {
  apiKey: process.env.FIREBASE_API_KEY,
  authDomain: "twitterclone3-3cb50.firebaseapp.com",
  projectId: "twitterclone3-3cb50",
  storageBucket: "twitterclone3-3cb50.appspot.com",
  messagingSenderId: "52448892091",
  appId: "1:52448892091:web:3e835cb0bb1916c833059e",
};

// Initialize Firebase
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
export { app, db, storage };
