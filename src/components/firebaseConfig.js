// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAVWYYThJe30B4Mttdh216IHgxjP8MQCPo",
  authDomain: "cavaviajes.firebaseapp.com",
  projectId: "cavaviajes",
  storageBucket: "cavaviajes.appspot.com",
  messagingSenderId: "1015934552295",
  appId: "1:1015934552295:web:37fa78ccfb0ea588bffa42"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;