import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCDxL37F6gjjHujX0OyEk2LC1ZsYCvDa0M",
  authDomain: "gameuserseeding.firebaseapp.com",
  projectId: "gameuserseeding",
  storageBucket: "gameuserseeding.firebasestorage.app",
  messagingSenderId: "330900391306",
  appId: "1:330900391306:web:547216c4622063f600b473",
  measurementId: "G-39N7TB20N7"
};

const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth = getAuth(app);

export{app,auth};