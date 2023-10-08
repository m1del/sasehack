import "../../globals.css";
import TopBar from "../../components/TopBar";
// async function getFood() {
//   const pb = new PocketBase("http://127.0.0.1:8090");

//   await pb.admins.authWithPassword("tuan3dang@gmail.com", "pocketbase123");

//   const data = await pb.collection("foods").getFullList();
//   console.log(data);
//   return data as any[];
// }

const tempFood = {
  name: "banana",
  purchase: "October 7th",
};

export default async function FoodPage() {
  // const foods = await getFood();
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
