import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyDTrqZuo--1dJGl3bpZPrixFWjSCmtddPg",
  authDomain: "requin-2f7e0.firebaseapp.com",
  projectId: "requin-2f7e0",
  storageBucket: "requin-2f7e0.appspot.com",
  messagingSenderId: "910149072452",
  appId: "1:910149072452:web:53d2cd6cd206cdfb00ee11",
  measurementId: "G-ZCZS802N7L",
};

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore();
export { db };
