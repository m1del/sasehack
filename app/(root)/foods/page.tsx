import PocketBase from "pocketbase";
async function getFood() {
  const pb = new PocketBase("http://127.0.0.1:8090");

  await pb.admins.authWithPassword("tuan3dang@gmail.com", "pocketbase123");

  const data = await pb.collection("foods").getFullList();
  console.log(data);
  return data as any[];
}

const tempFood = {
  name: "banana",
  purchase: "October 7th",
};

export default async function FoodPage() {
  const foods = await getFood();
  return (
    <div>
      <h1>Food Page</h1>
      <Food food={{ name: "banana", purchase: 5, expires: 6 }} />
    </div>
  );
}

function Food({ food }: any) {
  const { id, name, purchase, expires } = food || {};
  return (
    <div>
      <img src="../../public/assets/banana.jpg"></img>
      <h2>Food is not {name}</h2>
      <h2>Size/Quantity</h2>
      <p>Expiring in {expires - purchase} days!</p>
    </div>
  );
}
