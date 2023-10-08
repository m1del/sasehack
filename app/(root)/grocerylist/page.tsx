import "../../globals.css";
import TopBar from "../../components/TopBar";
import TypeAnim from "../../components/TypeAnim";

export default async function FoodPage() {
  return (
    <>
      <TopBar page={"Grocery List"} />
      <div>
        <div className="food-list">
          <ListInput />
          <ListInput />
          <ListInput />
          <ListInput />
          <ListInput />
          <ListInput />
          <ListInput />
          <ListInput />
          <ListInput />
          <button className="btn">Add Foods</button>
        </div>
      </div>
    </>
  );
}

function ListInput() {
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
