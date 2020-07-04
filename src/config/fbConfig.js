import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyC0QOC9JIL5kky7ZnW2hsxSkrv-BKF_9zA",
  authDomain: "marioplan-fb70f.firebaseapp.com",
  databaseURL: "https://marioplan-fb70f.firebaseio.com",
  projectId: "marioplan-fb70f",
  storageBucket: "marioplan-fb70f.appspot.com",
  messagingSenderId: "948177660918",
  appId: "1:948177660918:web:bbcddfdd5b4cbe2edfb5d7",
  measurementId: "G-SRLVNW5KE6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();
firebase.firestore();

export default firebase;
