// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBCzbeUOwgJ6pjsgeKgkKu0MEMoworm2mw",
  authDomain: "notes-app-6b4cc.firebaseapp.com",
  projectId: "notes-app-6b4cc",
  storageBucket: "notes-app-6b4cc.firebasestorage.app",
  messagingSenderId: "283815527104",
  appId: "1:283815527104:web:59a5244b3ca2983838a325",
  measurementId: "G-ZM2VCR0C7M"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);