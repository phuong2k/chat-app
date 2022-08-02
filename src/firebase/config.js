// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import 'firebase/compat/analytics';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCKtp5W4GIC_HB-BjfsW38nVujOPkzLv0s",
  authDomain: "chat-app-27592.firebaseapp.com",
  projectId: "chat-app-27592",
  storageBucket: "chat-app-27592.appspot.com",
  messagingSenderId: "6478287056",
  appId: "1:6478287056:web:24762e33f86fbab7470ed5",
  measurementId: "G-0VJYETCJVP"
};

// Initialize Firebase
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
firebase.analytics();

const auth = firebase.auth();
const db = firebase.firestore();

if (window.location.hostname === 'localhost') {
  // auth.useEmulator('http://localhost:9099');
  // db.useEmulator('localhost', '8080');
}

export { db, auth };
export default firebase;
