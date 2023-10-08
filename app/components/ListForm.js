import { useState } from "react";

export default function ListForm() {
  return (
    <>
      <div>
        <div className="food-list">
          <form>
            <ListInput el={1} />
            <ListInput el={2} />
            <ListInput el={3} />
            <ListInput el={4} />
            <ListInput el={5} />
            <ListInput el={6} />
            <ListInput el={7} />
            <ListInput el={8} />
            <ListInput el={9} />
            <button className="btn" type="submit">
              Add Foods
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

function ListInput({ parentCallback, i }) {
  function callParent() {
    this.props.parentCallback();
  }
  return (
    <div className="container">
      <div className="check_container">
        <input className="checkbox" type="checkbox" />
        <input className="check-input" type="text"></input>
        <select>
          <option value="pantry">Pantry</option>
          <option value="refrigerator">Fridge</option>
          <option value="freezer">Freezer</option>
        </select>
      </div>
    </div>
  );
}
