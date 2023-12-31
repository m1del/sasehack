import Food from "../../../components/Food";
import TopBar from "../../../components/TopBar";
import queryFood from "../../../dbscripts/queryFood";
import "../../../globals.scss";

export default async function FoodPage() {
  const foodData = await queryFood("freezer");
  const foods = [];
  const ids = [];
  foodData.forEach((doc) => {
    foods.push({ id: doc.id, data: doc.data() });
    ids.push(doc.id);
  });
  return (
    <>
      <TopBar page={"Kitchen"} />
      <div>
        <div className="food-list">
          {foods.map((food) => (
            <Food
              id={food.id}
              name={food.data.name}
              purchase={0}
              expires={food.data.daysTillExpire}
              location={food.data.location}
            />
          ))}
        </div>
      </div>
    </>
  );
}
