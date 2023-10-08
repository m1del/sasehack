"use client";
import { useState } from "react";
import { IconContext } from "react-icons";
import { IoClose } from "react-icons/io5";

function deleteData(id) {
  // Replace the console.log here with code to delete the food from firebase (import deleteFood.js and run the correct function)
  console.log("potato");
}

export default function Food({ id, name, purchase, expires, location }) {
  return (
    <div className="container">
      <div className="food_container">
        <img className="food_img" src="/assets/banana.jpg" />
        <div>
          <h2 className="food_header">Food is {name}</h2>
          <p className="food_expire">Expiring in {expires - purchase} days!</p>
        </div>
        <div className="food_subtext">
          <IconContext.Provider value={{ color: "black", size: "3rem" }}>
            <div>
              <IoClose
                onClick={() => {
                  // Call deleteData function to delete something from the database
                  deleteData();
                }}
              />
            </div>
          </IconContext.Provider>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
}
