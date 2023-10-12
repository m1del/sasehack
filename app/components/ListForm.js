import { addDoc, collection } from "firebase/firestore";
import { useState } from "react";
import addFood from "../dbscripts/addFood.js";
import { db } from "../services/firebase.js";

export default function ListForm() {
  const [items, setItems] = useState([{ name: "", location: "pantry" }]);

  const updateExpirationDates = async () => {
    try {
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

  const addNewItem = () => {
    setItems([...items, { name: "", location: "pantry" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Iterate through each item and add them to Firebase
    for (const item of items) {
      await addFood(item.name, item.location, 0);
    }

    // Update expiration dates after adding the items
    await updateExpirationDates();
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
          {items.map((_, i) => (
            <ListInput
              key={i}
              onChange={(newItem) => handleItemChange(i, newItem)}
            />
          ))}
          <div className="btns">
            <button className="btn" type="button" onClick={addNewItem}>
              Add More Items
            </button>
            <button className="btn" type="submit">
              Finish Shopping
            </button>
          </div>
        </form>
      </div>


      {/* <form action="">
        <div class="form-control">
          <input type="checkbox" name="checkbox" />
          <input type="text" name="text-input" placeholder="Enter text" />
          <select name="dropdown">
            <option value="option1">Option 1</option>
            <option value="option2">Option 2</option>
            <option value="option3">Option 3</option>
          </select>
        </div>
      </form> */}


    </>
    // <>
    //   <div>
    //     <div className="food-list">
    //       <form onSubmit={handleSubmit}>
    //         {items.map((_, i) => (
    //           <ListInput
    //             key={i}
    //             onChange={(newItem) => handleItemChange(i, newItem)}
    //           />
    //         ))}
    //         <div className="btns">
    //           <button className="btn" type="button" onClick={addNewItem}>
    //             Add More Items
    //           </button>
    //           <button className="btn" type="submit">
    //             Finish Shopping
    //           </button>
    //         </div>
    //       </form>
    //     </div>
    //   </div>
    // </>
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
        onChange={(e) => handleInputChange("bought", e.target.checked)}
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
