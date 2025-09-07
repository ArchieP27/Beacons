// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore"; // <-- add Firestore

const firebaseConfig = {
  apiKey: "key",
  authDomain: "beacon-21672.firebaseapp.com",
  projectId: "beacon-21672",
  storageBucket: "beacon-21672.appspot.com",
  messagingSenderId: "283514020607",
  appId: "1:283514020607:web:d07a756a052baba06ce2ca",
  measurementId: "G-VKW5E0S821",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const db = getFirestore(app); // <-- initialize Firestore

// Export the things you need
export { app, analytics, db }; // <-- named exports
