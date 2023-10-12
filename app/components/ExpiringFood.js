"use client";

export default function ExpiringFood({ name, expires }) {

  function getImagePath(foodName) {
    return `/assets/${foodName.toLowerCase()}.png`;
  }

  return (
    <>
      <div className="expire_container">
        <img className="food_img" src={getImagePath(name)} />
        <div>
          <h2 className="food_header">{name}</h2>
          <p className="food_expire">{expires} days left!</p>
        </div>
      </div>
    </>
  );
}
