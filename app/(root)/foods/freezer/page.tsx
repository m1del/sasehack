import { use, cache } from "react";
import addFood from "../../../dbscripts/addFood";
import deleteFood from "../../../dbscripts/deleteFood";
import queryFood from "../../../dbscripts/queryFood";
import "../../../globals.css";
import TopBar from "../../../components/TopBar";
// Import the functions you need from the SDKs you need
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
  measurementId: "G-NLJ26MCSCL",
};

export default async function FoodPage() {
  addFood("banana", "fridge", 5);
  queryFood("fridge");
  const tempFood = {
    name: "banana",
    purchase: "October 7th",
  };
  return (
    <>
      <TopBar page={"Kitchen (Freezer)"} />
      <div>
        <div className="food-list">
          <Food food={{ name: "banana", purchase: 5, expires: 6 }} />
          <Food food={{ name: "banana", purchase: 5, expires: 6 }} />
          <Food food={{ name: "banana", purchase: 5, expires: 6 }} />
          <Food food={{ name: "banana", purchase: 5, expires: 6 }} />
          <Food food={{ name: "banana", purchase: 5, expires: 6 }} />
          <Food food={{ name: "banana", purchase: 5, expires: 6 }} />
        </div>
      </div>
    </>
  );
}

function Food({ food }: any) {
  const { id, name, purchase, expires } = food || {};
  return (
    <div className="container">
      <div className="food_container">
        <img className="food_img" src="/assets/banana.jpg" />
        <div>
          <h2 className="food_header">Food is {name}</h2>
          <p className="food_expire">Expiring in {expires - purchase} days!</p>
        </div>
        <div className="food_subtext">
          <h2>X oz</h2>
          <p>Fridge</p>
        </div>
      </div>
    </div>
  );
}
