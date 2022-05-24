import firebase from "firebase/app";
import "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAij57oSuc9oqrJPJ7GEMrmcFqnGapOERc",
  authDomain: "mk-kitchen.firebaseapp.com",
  projectId: "mk-kitchen",
  storageBucket: "mk-kitchen.appspot.com",
  messagingSenderId: "663414817817",
  appId: "1:663414817817:web:8794cd021bd7dd535e5688"
};

// init firebase
firebase.initializeApp(firebaseConfig);

// init services
const projectFirestore = firebase.firestore();

export { projectFirestore };
