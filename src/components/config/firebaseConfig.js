import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyAGvT16nxvWuS9frhgxsVfamgMw1--NMp0",
  authDomain: "todo-9e4af.firebaseapp.com",
  databaseURL: "https://todo-9e4af.firebaseio.com",
  projectId: "todo-9e4af",
  storageBucket: "todo-9e4af.appspot.com",
  messagingSenderId: "45305057649",
  appId: "1:45305057649:web:5f18a87b1c642062f4a6d0",
};

firebase.initializeApp(firebaseConfig);
firebase.firestore();

export default firebase;
