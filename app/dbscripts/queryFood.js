import { initializeApp } from "firebase/app";
import {
  collection,
  getFirestore,
  query,
  where,
  getDocs,
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCVtfZM7u_K0StBgceDRkvofjdazzPkqzo",
  authDomain: "pantry-c664a.firebaseapp.com",
  projectId: "pantry-c664a",
  storageBucket: "pantry-c664a.appspot.com",
  messagingSenderId: "204724751013",
  appId: "1:204724751013:web:58e259085a8940645f5b4c",
  measurementId: "G-NLJ26MCSCL",
};

async function queryData(location) {
  let q = null;
  if (location == "all") {
    q = query(collection(db, "food"));
  } else {
    q = query(collection(db, "food"), where("location", "==", location));
  }

  const querySnap = await getDocs(q);
  return querySnap;
}

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default function test(location) {
  return queryData(location);
}
