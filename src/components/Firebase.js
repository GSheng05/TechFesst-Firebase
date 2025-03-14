// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth , createUserWithEmailAndPassword } from "firebase/auth";
import { getFirestore } from "firebase/firestore"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_pgUhYoolE2putaXiECDH2nyP0gkU4-M",
  authDomain: "authentication-2f7ef.firebaseapp.com",
  projectId: "authentication-2f7ef",
  storageBucket: "authentication-2f7ef.firebasestorage.app",
  messagingSenderId: "618815609277",
  appId: "1:618815609277:web:e0e1495d19790cef489ad4"
};

const app = initializeApp(firebaseConfig);
export const auth=getAuth(app);
export const db = getFirestore(app);
export default app;
