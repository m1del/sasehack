"use client";
import { IconContext } from "react-icons";
import { IoClose } from "react-icons/io5";

export default function Food({ id, name, purchase, expires, location }) {
  return (
    <div className="container">
      <div className="food_container">
        <img className="food_img" src="/assets/banana.jpg" />
        <div>
          <h2 className="food_header">{name}</h2>
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
