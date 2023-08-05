// import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyDfuDrPg6RwPpsy8PNAfZjjRRWeEKlSiuU",
  authDomain: "nexflix-app.firebaseapp.com",
  projectId: "nexflix-app",
  storageBucket: "nexflix-app.appspot.com",
  messagingSenderId: "491332917535",
  appId: "1:491332917535:web:64085da574849793f6f82a",
  measurementId: "G-FQ2LCZC7RM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
