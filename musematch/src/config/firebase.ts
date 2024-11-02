import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "",
  authDomain: "muse-match-31ad9.firebaseapp.com",
  projectId: "muse-match-31ad9",
  storageBucket: "muse-match-31ad9.firebasestorage.app",
  messagingSenderId: "137046282110",
  appId: "1:137046282110:web:42f0b39d277cb9f656ed2f",
  measurementId: "G-FN4QNWJFHE",
};

// Initialize Firebase
firebaseConfig.apiKey = import.meta.env.VITE_FIREBASE_API_KEY;
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
