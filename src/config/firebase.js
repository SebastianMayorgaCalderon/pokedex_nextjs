// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAv8CMw-lcGYG5UQrhle1eEUoFiPnAyNN4",
  authDomain: "pokedex-nextjs.firebaseapp.com",
  projectId: "pokedex-nextjs",
  storageBucket: "pokedex-nextjs.appspot.com",
  messagingSenderId: "504881373356",
  appId: "1:504881373356:web:a1f48aaa474c4dafefbf09",
  measurementId: "G-HBCNL4D3BH",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();
export { app, auth };
