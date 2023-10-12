"use client";
import TopBar from "@/app/components/TopBar";
import TypeAnim from "@/app/components/TypeAnim";
import { config } from "dotenv";
import { useEffect, useState } from "react";
import ExpiringFood from "../../components/ExpiringFood";
config();

function ExpiringFoodList() {
  const [expire, setExpire] = useState([]);
  const [recipe, setRecipe] = useState("Generating Recipe . . .");
  const [loading, setLoading] = useState(true);


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
      } finally {
        setLoading(false);
      }
    }
    makeRecipe();
  }, []);


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
          {loading ? (
            <p>Loading recipe...</p>
          ) : (
            <TypeAnim text={recipe} inf={Infinity} />
          )}
        </div>
      </div>
    </>
  );
}

export default ExpiringFoodList;
