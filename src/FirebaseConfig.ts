import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDXUay2l2zpWovq2B7gD8i9b-tLNw1KrPY",
  authDomain: "planwithgratitude.firebaseapp.com",
  projectId: "planwithgratitude",
  storageBucket: "planwithgratitude.appspot.com",
  messagingSenderId: "672575959044",
  appId: "1:672575959044:web:1a37e208a1d4525ffa8551",
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
