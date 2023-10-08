"use client";
import test from "./test";
import "../../../globals.css";
import TopBar from "../../../components/TopBar";
// Import the functions you need from the SDKs you need
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional

export default async function FoodPage() {
  const tempFood = {
    name: "banana",
    purchase: "October 7th",
  };
  test();
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
