// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCVtfZM7u_K0StBgceDRkvofjdazzPkqzo",
  authDomain: "pantry-c664a.firebaseapp.com",
  projectId: "pantry-c664a",
  storageBucket: "pantry-c664a.appspot.com",
  messagingSenderId: "204724751013",
  appId: "1:204724751013:web:58e259085a8940645f5b4c",
  measurementId: "G-NLJ26MCSCL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);


//authenticate user with google gmail
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    console.log( 'user', user );
});

signInWithPopup(auth, new GoogleAuthProvider()) 

//Write JSON data to Firebase

const db = getFirestore(app);
const boatRef = doc(db, "boats", "alcyone");