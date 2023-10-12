import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import addFood from "../dbscripts/addFood.js";
import { db } from "../services/firebase.js";

export default function ListForm() {
  const [items, setItems] = useState([
    { name: "", location: "pantry", bought: false },
  ]);

  const updateExpirationDates = async () => {
    try {
      const response = await fetch(
        "http://127.0.0.1:5000/expiring_ingredients",
        {
          method: "POST",
        }
      );
      const data = await response.json();
      if (data.status === "success") {
        console.log(data.message);
      } else {
        console.error(data.message);
      }
    } catch (error) {
      console.error("Failed to update expiration dates:", error);
    }
  };

  const addNewItem = () => {
    setItems([...items, { name: "", location: "pantry" }]);
  };

  const removeItem = () => {
    setItems(items.slice(0, -1));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Iterate through each item and add them to Firebase
    for (const item of items) {
      if (item.bought) {
        const test = await addFood(item.name, item.location, 0);
      }
    }

    // Update expiration dates after adding the items
    const _ = await updateExpirationDates();
    setTimeout(function () {
      window.location.href = "/grocerylist";
    }, 600);
  };

  const handleItemChange = (index, newItem) => {
    const newItems = [...items];
    newItems[index] = newItem;
    setItems(newItems);
  };

  return (
    <>
      <div className="food-list">
        <form onSubmit={handleSubmit}>
          <div className="list-flex">
            <div>
              {items.map((_, i) => (
                <ListInput
                  key={i}
                  onChange={(newItem) => handleItemChange(i, newItem)}
                />
              ))}
              <div className="btns">
                <button className="btn" type="button" onClick={addNewItem}>
                  Add Item
                </button>
                <button className="btn" type="button" onClick={removeItem}>
                  Remove Item
                </button>
              </div>
            </div>
            <button className="btn shopping" type="submit">
              Finish Shopping
            </button>
          </div>
        </form>
      </div>
    </>
  );
}

function ListInput({ onChange }) {
  const [item, setItem] = useState({
    name: "",
    location: "pantry",
    bought: false,
  });

  const handleInputChange = (field, value) => {
    const newItem = { ...item, [field]: value };
    setItem(newItem);
    onChange(newItem);
  };

  return (
    <div className="form-control">
      <input
        type="checkbox"
        checked={item.bought}
        onChange={(e) => {
          console.log(e.target.checked);
          handleInputChange("bought", e.target.checked);
        }}
      />
      <input
        type="text"
        value={item.name}
        placeholder="Enter text"
        onChange={(e) => handleInputChange("name", e.target.value)}
      />
      <select
        value={item.location}
        onChange={(e) => handleInputChange("location", e.target.value)}
      >
        <option value="pantry">Pantry</option>
        <option value="fridge">Fridge</option>
        <option value="freezer">Freezer</option>
      </select>
    </div>
  );
}
