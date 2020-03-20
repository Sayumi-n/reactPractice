import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCmkK9uDi9zsfttmypS2ABHshs5q_XDWss",
  authDomain: "net-ninja-mario-plan-4da64.firebaseapp.com",
  databaseURL: "https://net-ninja-mario-plan-4da64.firebaseio.com",
  projectId: "net-ninja-mario-plan-4da64",
  storageBucket: "net-ninja-mario-plan-4da64.appspot.com",
  messagingSenderId: "230161252173",
  appId: "1:230161252173:web:6c93e1620091b8d7b48104",
  measurementId: "G-JQ1JPHNFKQ"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();
firebase.firestore().settings({ timestampsInSnapshots: true });

export default firebase;
