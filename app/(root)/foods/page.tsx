import "../../globals.css";
import TopBar from "../../components/TopBar";
import queryFood from "../../dbscripts/queryFood";

export default async function FoodPage() {
  const foodData = await queryFood("fridge");
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

function Food({ id, name, purchase, expires, location }: any) {
  return (
    <div className="container">
      <div className="food_container">
        <img className="food_img" src="/assets/banana.jpg" />
        <div>
          <h2 className="food_header">Food is {name}</h2>
          <p className="food_expire">Expiring in {expires - purchase} days!</p>
        </div>
        <div className="food_subtext">
          <h2>X oz</h2>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
}
