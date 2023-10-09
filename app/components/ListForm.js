import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import { db } from "../services/firebase.js";

export default function ListForm() {
  const [items, setItems] = useState([
    { name: "", location: "pantry", bought: false },
  ]);

  const updateExpirationDates = async () => {
    try {
      // Assuming your backend is running on localhost:5000
      const response = await fetch("http://localhost:5000/update_expirations", {
        method: "POST",
      });
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

  const handleItemChange = (index, newItem) => {
    const newItems = [...items];
    newItems[index] = newItem;
    setItems(newItems);
  };

  const addNewItem = () => {
    setItems([
      ...items,
      { name: "", location: "pantry", daysTillExpire: 0, bought: false },
    ]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Filter the items that have been bought (checked)
    const checkedItems = items.filter((item) => item.bought);

    // Iterate through each checked item and add them to Firebase
    for (const item of checkedItems) {
      try {
        await addDoc(collection(db, "food"), item);
      } catch (error) {
        console.error("Error adding document: ", error);
      }
    }
    
    // After adding the items to Firestore, update their expiration dates
    await updateExpirationDates();
  };

  return (
    <>
      <div>
        <div className="food-list">
          <form onSubmit={handleSubmit}>
            {items.map((_, i) => (
              <ListInput
                key={i}
                onChange={(newItem) => handleItemChange(i, newItem)}
              />
            ))}
            <button className="btn" type="button" onClick={addNewItem}>
              Add More Items
            </button>
            <button className="btn" type="submit">
              Finish Shopping
            </button>
          </form>
        </div>
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
    <div className="container">
      <div className="check_container">
        <input
          className="checkbox"
          type="checkbox"
          checked={item.bought}
          onChange={(e) => handleInputChange("bought", e.target.checked)}
        />
        <input
          className="check-input"
          type="text"
          value={item.name}
          onChange={(e) => handleInputChange("name", e.target.value)}
        />
        <select
          value={item.location}
          onChange={(e) => handleInputChange("location", e.target.value)}
        >
          <option value="pantry">Pantry</option>
          <option value="refrigerator">Fridge</option>
          <option value="freezer">Freezer</option>
        </select>
      </div>
    </div>
  );
}
