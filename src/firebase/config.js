// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyDvVVRwWnmUInZjoydtftXpmH25vQYvQ4c",
    authDomain: "db-aghione-coderhouse.firebaseapp.com",
    projectId: "db-aghione-coderhouse",
    storageBucket: "db-aghione-coderhouse.appspot.com",
    messagingSenderId: "720544869685",
    appId: "1:720544869685:web:dffb9dcc7ad60c13d7b07c"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default function getFirebaseDBConn(){
    return app
}