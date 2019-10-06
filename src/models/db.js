const firebase = require("firebase");
// Required for side-effects
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "AIzaSyDT8vtFi9U-hOJw6Gk6k8LOx9Jya8KBDgc",
  authDomain: "ukrmemeswiki.firebaseapp.com",
  databaseURL: "https://ukrmemeswiki.firebaseio.com",
  projectId: "ukrmemeswiki",
  storageBucket: "",
  messagingSenderId: "925209845247",
  appId: "1:925209845247:web:aab80a95594b9e604f1bca",
  measurementId: "G-5MV7LGZSB9"
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;
