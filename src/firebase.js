import { initializeApp } from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";
// import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyADQV8VH1bGNTYrFkqUFIVbqUuqpmsrvPo",
  authDomain: "react-firebase-chat-app-2dddf.firebaseapp.com",
  projectId: "react-firebase-chat-app-2dddf",
  storageBucket: "react-firebase-chat-app-2dddf.appspot.com",
  messagingSenderId: "164408538298",
  appId: "1:164408538298:web:da784e311737253c373e83",
  measurementId: "G-FNYBH9W5ZF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
