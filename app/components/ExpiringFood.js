"use client";
import { IconContext } from "react-icons";
import { IoClose } from "react-icons/io5";

export default function ExpiringFood({ name, expires }) {
  return (
    <div className="">
      <div className="expire_container">
        <img className="food_img" src="/assets/banana.jpg" />
        <div>
          <h2 className="food_header">{name}</h2>
          <p className="food_expire">{expires} days left!</p>
        </div>

      </div>
    </div>
  );
}
