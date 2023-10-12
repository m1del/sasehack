"use client";
import { useState } from "react";
import { IconContext } from "react-icons";
import { IoClose } from "react-icons/io5";
import deleteFood from "../dbscripts/deleteFood";

function deleteData(id) {
  return deleteFood(id);
}

export default function Food({ id, name, purchase, expires, location }) {
  const [hidden, setHidden] = useState(false);
  const containerClass = hidden ? "container hidden" : "container";
  let address = "";
  const nameArr = name.split(" ");
  const nameUpper = nameArr.map(
    (word) => word.charAt(0).toUpperCase() + word.slice(1)
  );
  if (name == "bananas") {
    address = "/assets/banana.jpg";
  } else {
    address = "/assets/chicken.png";
  }

  const color = expires > 3 ? "green" : "red";
  return (
    <div className={containerClass}>
      <div className="food_container">
        <img className="food_img" src={address} />
        <div>
          <h2 className="food_header">{nameUpper.join(" ")}</h2>
          <p className="food_expire" style={{ color: color }}>
            Expiring in {expires - purchase} days!
          </p>
        </div>
        <div className="food_subtext">
          <IconContext.Provider value={{ color: "black", size: "3rem" }}>
            <div>
              <IoClose
                onClick={async () => {
                  setHidden(true);
                  const res = await deleteData(id);
                  const refresh = await window.location.reload();
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
