import { addDoc, collection } from "firebase/firestore";
import { db } from "../services/firebase.js";

async function addData(name, location, daysTillExpire) {
  const docRef = await addDoc(collection(db, "food"), {
    name: name,
    location: location,
    daysTillExpire: daysTillExpire,
  });
}

export default function addFood(name, location, daysTillExpire) {
  addData(name, location, daysTillExpire);
}
