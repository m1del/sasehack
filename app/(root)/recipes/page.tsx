"use client";
import TopBar from "@/app/components/TopBar";
import { config } from "dotenv";
import { useEffect, useState } from "react";
import ExpiringFood from "../../components/ExpiringFood";
import TypeAnim from "@/app/components/TypeAnim";
config();

function ExpiringFoodList() {
  const [expire, setExpire] = useState([]);
  const [recipe, setRecipe] = useState("Pinging OpenAi...");
  const [repeat, setRepeat] = useState(Infinity);
  useEffect(() => {
    async function fetchFoods() {
      try {
        const response = await fetch(
          "http://127.0.0.1:5000/expiring_ingredients",
          {
            method: "GET",
          }
        );
        const data = await response.json();
        setExpire(data.expiring_ingredients);
      } catch (error) {
        console.error("Failed to update expiration dates:", error);
      }
    }
    fetchFoods();
    async function makeRecipe() {
      try {
        console.log("pinging openAI...");
        const response = await fetch("http://127.0.0.1:5000/get_recipe", {
          method: "GET",
        });
        const data = await response.json();
        console.log(data);
        setRecipe(data.recipe);
      } catch (error) {
        console.error("Failed to update expiration dates:", error);
      }
    }
    makeRecipe();
  }, []);

  const prompt =
    "I have most cookware available at my disposal such as a stove, oven, microwave, air fryer, toaster, kettle, along with utensils like kitchen knives, spatulas, etc. ";
  ("I have these ingredients: {ingredients}. ");
  ("Give me a recipe that includes most, if not all of these ingredients. ");
  ("You may include other ingredients from my kitchen, such as {inventory} ");
  ("and items that are common to most households, like salt, pepper, oregano, and garlic powder. ");
  ("What can I make as well as the instructions?");

  return (
    <>
      <TopBar page="Recipe" />
      <div className="flex-expired">
        <div className="expired-foods">
          {expire.map((food) => (
            <ExpiringFood name={food[0]} expires={food[1]} />
          ))}
        </div>

        <div className="text-box">
          <TypeAnim text={recipe} inf={Infinity} />
        </div>
      </div>
    </>
  );
}

export default ExpiringFoodList;
