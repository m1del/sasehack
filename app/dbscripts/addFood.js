import { initializeApp } from "firebase/app";
import { collection, getFirestore, addDoc, setDoc } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVtfZM7u_K0StBgceDRkvofjdazzPkqzo",
  authDomain: "pantry-c664a.firebaseapp.com",
  projectId: "pantry-c664a",
  storageBucket: "pantry-c664a.appspot.com",
  messagingSenderId: "204724751013",
  appId: "1:204724751013:web:58e259085a8940645f5b4c",
  measurementId: "G-NLJ26MCSCL",
};

async function addData(name, location, daysTillExpire) {
  const docRef = await addDoc(collection(db, "food"), {
    name: name,
    location: location,
    daysTillExpire: daysTillExpire,
  });
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default function test(name, location, daysTillExpire) {
  addData(name, location, daysTillExpire);
}
