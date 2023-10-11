import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../services/firebase";

async function deleteData(id) {
  const docRef = await deleteDoc(doc(db, "food", id));
}

function deleteFood(id) {
  return deleteData(id);
}

export default deleteFood;
