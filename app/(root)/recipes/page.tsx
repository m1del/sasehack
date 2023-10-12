"use client";
import TopBar from "@/app/components/TopBar";
import { config } from "dotenv";
import { useEffect, useState } from "react";
import ExpiringFood from "../../components/ExpiringFood";
import TypeAnim from "@/app/components/TypeAnim";
config();

function ExpiringFoodList() {
  useEffect(() => {
    async function fetchFoods() {
      const res = await fetch("http://localhost:5000/expiring_ingredients", {
        method: "GET",
      });
      const data = await res.json();
      console.log("Data type:", typeof data);
      console.log("Data content:", data);
      console.log(res);
    }
    fetchFoods();
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
          <ExpiringFood name={"spaghetti"} expires={2} />
          <ExpiringFood name={"meatballs"} expires={2} />
        </div>

        <div className="text-box">
          <TypeAnim />
        </div>
      </div>
    </>
  );
}

export default ExpiringFoodList;
