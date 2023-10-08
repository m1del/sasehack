import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../services/firebase.js";

async function queryData(location) {
  let q = null;
  
  if (location === "all") {
    q = query(collection(db, "food"));
  } else {
    q = query(collection(db, "food"), where("location", "==", location));
  }

  const querySnapshot = await getDocs(q);
  return querySnapshot;
}

export default function fetchFoodByLocation(location) {
  return queryData(location);
}
