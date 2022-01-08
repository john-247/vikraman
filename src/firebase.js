// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = ;
import { initializeApp } from "firebase/app";
import "firebase/firestore";

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyADppM4g5RTxWO4rRWVOVZasKn7BRmGfqc",
  authDomain: "vikraman-e5148.firebaseapp.com",
  projectId: "vikraman-e5148",
  storageBucket: "vikraman-e5148.appspot.com",
  messagingSenderId: "227218620142",
  appId: "1:227218620142:web:3db11c12b69f69942b7dff",
  measurementId: "G-4M13HLJ3RB",
});

const db = firebaseApp.firestore();

export default db;
