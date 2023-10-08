import "../../globals.css";
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
    <div>
      <h1>Food Page</h1>
      <Food food={{ name: "banana", purchase: 5, expires: 6 }} />
      <Food food={{ name: "banana", purchase: 5, expires: 6 }} />
      <Food food={{ name: "banana", purchase: 5, expires: 6 }} />
      <Food food={{ name: "banana", purchase: 5, expires: 6 }} />
      <Food food={{ name: "banana", purchase: 5, expires: 6 }} />
    </div>
  );
}

function Food({ food }: any) {
  const { id, name, purchase, expires } = food || {};
  return (
    <div className="container">
      <div className="food_container">
        <img className="food_img" src="/assets/banana.jpg" />
        <div className="first">
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