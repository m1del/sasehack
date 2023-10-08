import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firebase.js"; // Adjust the path accordingly

async function queryData(location) {
  let q = null;
  
  if (location === "all") {
    q = query(collection(db, "food"));
  } else {
    q = query(collection(db, "food"), where("location", "==", location));
  }

  const querySnapshot = await getDocs(q);
  const foods = querySnapshot.docs.map(doc => ({ ...doc.data(), id: doc.id })); // Map over documents and return their data
  return foods;
}

export default function fetchFoodByLocation(location) {
  return queryData(location);
}
