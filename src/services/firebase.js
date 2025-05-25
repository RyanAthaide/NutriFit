 
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBxYgnOqHCClRYRGTQ9QmA9XnaLLJU3guM",
  authDomain: "nutrifit-auth-3872c.firebaseapp.com",
  projectId: "nutrifit-auth-3872c",
  storageBucket: "nutrifit-auth-3872c.appspot.com",
  messagingSenderId: "578333420202",
  appId: "1:578333420202:web:38cbef9d5b0c349ebb3ed3",
  measurementId: "G-H6N2RJX4TL"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
