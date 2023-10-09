"use client";
import { useState } from "react";
import { IconContext } from "react-icons";
import { IoClose } from "react-icons/io5";
import deleteFood from "../dbscripts/deleteFood";

function deleteData(id) {
  deleteFood(id);
}

export default function Food({ id, name, purchase, expires, location }) {
  let address = "";
  if (name == "bananas") {
    address = "/assets/banana.jpg";
  } else {
    address = "/assets/chicken.png";
  }
  return (
    <div className="container">
      <div className="food_container">
        <img className="food_img" src={address} />
        <div>
          <h2 className="food_header">{name}</h2>
          <p className="food_expire">Expiring in {expires - purchase} days!</p>
        </div>
        <div className="food_subtext">
          <IconContext.Provider value={{ color: "black", size: "3rem" }}>
            <div>
              <IoClose
                onClick={() => {
                  deleteData(id);
                  setTimeout(() => {
                    window.location.reload();
                  }, 450);
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
