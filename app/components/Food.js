"use client";
import { useState } from "react";
import { IconContext } from "react-icons";
import { IoClose } from "react-icons/io5";

function deleteData(id) {
  deleteData(id);
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
