// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';
import {getStorage} from 'firebase/storage';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBhaYIIMKq5_a8v_DqeHNyoQNwwJub952w",
  authDomain: "to-do-list-d9fbb.firebaseapp.com",
  projectId: "to-do-list-d9fbb",
  storageBucket: "to-do-list-d9fbb.appspot.com",
  messagingSenderId: "239505321315",
  appId: "1:239505321315:web:6501ad372ee65c0e52b756",
  measurementId: "G-HEFMTJP2LS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)
export const auth = getAuth(app)
export const storage = getStorage(app)