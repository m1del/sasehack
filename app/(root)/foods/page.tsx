import "../../globals.css";
import TopBar from "../../components/TopBar";
import queryFood from "../../dbscripts/queryFood";

export default async function FoodPage() {
  const foods = await queryFood("fridge");
  console.log(foods);
  return (
    <>
      <TopBar page={"Kitchen"} />
      <div>
        <div className="food-list">
          <Food food={{ name: "banana", purchase: 5, expires: 6 }} />
          <Food food={{ name: "banana", purchase: 5, expires: 6 }} />
          <Food food={{ name: "banana", purchase: 5, expires: 6 }} />
          <Food food={{ name: "banana", purchase: 5, expires: 6 }} />
          <Food food={{ name: "banana", purchase: 5, expires: 6 }} />
          <Food food={{ name: "banana", purchase: 5, expires: 6 }} />
        </div>
      </div>
    </>
  );
}

function Food({ food }: any) {
  const { id, name, purchase, expires } = food || {};
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
          <p>Fridge</p>
        </div>
      </div>
    </div>
  );
}
