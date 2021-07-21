import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const firebaseConfig = {
    apiKey: "AIzaSyA-sOPcROQupxbUbyOB6x-e8IYqlpVYf6w",
    authDomain: "journal-app-cd4f2.firebaseapp.com",
    databaseURL: "https://journal-app-cd4f2-default-rtdb.firebaseio.com",
    projectId: "journal-app-cd4f2",
    storageBucket: "journal-app-cd4f2.appspot.com",
    messagingSenderId: "817586891382",
    appId: "1:817586891382:web:82a7aee55b50cd27da0d57"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export {
    db,
    googleAuthProvider,
    firebase
}