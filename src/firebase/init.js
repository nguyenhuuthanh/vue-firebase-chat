import firebase from "firebase/app";
import firestore from "firebase/firestore";

// Initialize Firebase
var config = {
  apiKey: "AIzaSyDpQWHMdiuXQDQioRgxqfqqsx22Ippl8l0",
  authDomain: "vue-chat-9725d.firebaseapp.com",
  databaseURL: "https://vue-chat-9725d.firebaseio.com",
  projectId: "vue-chat-9725d",
  storageBucket: "vue-chat-9725d.appspot.com",
  messagingSenderId: "1050439303280",
  appId: "1:1050439303280:web:0e43d3516fbedb5415b4b5",
  measurementId: "G-EYW556JCNM",
};
const firebaseApp = firebase.initializeApp(config);
firebaseApp.firestore().settings({ timestampsInSnapshots: true });
export default firebaseApp.firestore();
