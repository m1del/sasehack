import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyD-0Zz4Q4Z3X5Z3Z3Z3Z3Z3Z3Z3Z3Z3Z3",
    authDomain: "pantry.firebaseapp.com",
    projectId: "pantry-c664a",
    storageBucket: "pantry.appspot.com",
    messagingSenderId: "123456789",
    appId: "1:123456789:web:123456789",
};

const app = initializeApp(firebaseConfig);

//authenticate user with google gmail
const auth = getAuth(app);

onAuthStateChanged(auth, (user) => {
    console.log( 'user', user );
});

signInWithPopup(auth, new GoogleAuthProvider()) 

//Write JSON data to Firebase

const db = getFirestore(app);
const boatRef = doc(db, "boats", "alcyone");