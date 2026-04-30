import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth , GoogleAuthProvider} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcivGPxRHowTSyDkmpDX8gTfGYH4OCCPI",
  authDomain: "auth-350a1.firebaseapp.com",
  projectId: "auth-350a1",
  storageBucket: "auth-350a1.firebasestorage.app",
  messagingSenderId: "799773853658",
  appId: "1:799773853658:web:ec86489b8e1e1cd6fce2e3",
  measurementId: "G-27C8F76R5G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();