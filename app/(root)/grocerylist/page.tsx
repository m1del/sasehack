"use client";
import { useState } from "react";
import ListForm from "../../components/ListForm";
import TopBar from "../../components/TopBar";
import TypeAnim from "../../components/TypeAnim";
import "../../globals.css";

export default async function FoodPage() {
  return (
    <>
      <TopBar page={"Grocery List"} />
      <div>
        <div className="food-list">
          <ListForm />
        </div>
      </div>
    </>
  );
}

// function ListInput() {
//   return (
//     <div className="container">
//       <div className="check_container">
//         <input className="checkbox" type="checkbox" />
//         <input className="check-input" type="text"></input>
//         <select>
//           <option value="pantry">Pantry</option>
//           <option value="refrigerator">Fridge</option>
//           <option value="freezer">Freezer</option>
//         </select>
//       </div>
//     </div>
//   );
// }
