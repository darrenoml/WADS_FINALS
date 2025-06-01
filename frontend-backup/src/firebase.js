// frontend/src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB2m5LAvrjT2Q42dfDyCuJ5VjaFtXAfuvU",
  authDomain: "adoptme-wads.firebaseapp.com",
  projectId: "adoptme-wads",
  storageBucket: "adoptme-wads.firebasestorage.app",
  messagingSenderId: "606594830104",
  appId: "1:606594830104:web:cc716451c696e0ff95186d",
  measurementId: "G-F2RHD2CDRD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);