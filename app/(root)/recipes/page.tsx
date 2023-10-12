"use client";
import TopBar from "@/app/components/TopBar";
import { config } from "dotenv";
import { useEffect, useState } from "react";
import ExpiringFood from "../../components/ExpiringFood";
import TypeAnim from "@/app/components/TypeAnim";
config();

import { OpenAI } from "openai";
import readline from "readline";

function ExpiringFoodList() {
  const [foods, setFoods] = useState([]);
  const [recipes, setRecipes] = useState("");

  useEffect(() => {
    async function fetchFoods() {
      const res = await fetch("http://localhost:5000/expiring_ingredients");
      const data = await res.json();
      // if (!Array.isArray(data)) {
      //     console.error("Returned data is not an array:", data);
      //     return;  // Exit if data isn't an array
      // }
      console.log("Data type:", typeof data);
      console.log("Data content:", data);

      setFoods(data.expiring_ingredients);
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

  let placeholder = `
    Spaghetti and Meatballs with Homemade Tomato Sauce
    Ingredients:
    
        Spaghetti
        Meatballs (if they're frozen, make sure to thaw them first)
        1 can or jar of tomato paste (about 6 oz)
        1-2 cups of water or chicken broth (depending on desired sauce thickness)
        2-3 cloves of garlic, minced
        1-2 tablespoons of olive oil
        Salt, to taste
        Pepper, to taste
        1 teaspoon of oregano (or to taste)
        Optional: red pepper flakes for some heat
        Optional: fresh basil or parsley for garnish
    
    Instructions:
    
        Meatballs:
        a. Preheat the air fryer to 375°F (190°C).
        b. Place the meatballs in the air fryer basket in a single layer, making sure they're not touching. Cook for 10-12 minutes, shaking the basket halfway through, or until they're cooked through and slightly crispy on the outside. Remove and set aside.
    
        Homemade Tomato Sauce:
        a. In a large saucepan, heat the olive oil over medium heat.
        b. Add the minced garlic and sauté until fragrant, about 1-2 minutes. Be careful not to burn it.
        c. Stir in the tomato paste and cook for another 2 minutes, allowing it to darken slightly.
        d. Gradually add the water or chicken broth, stirring constantly to create a smooth sauce.
        e. Season with salt, pepper, oregano, and optional red pepper flakes.
        f. Lower the heat and let the sauce simmer for about 20-25 minutes, stirring occasionally. If the sauce gets too thick, add more water or broth to reach your desired consistency.
        g. Once the sauce is ready, add the cooked meatballs to the sauce and let them simmer for another 5 minutes to soak up some of the flavors.
    
        Spaghetti:
        a. Fill a large pot with water, add a pinch of salt, and bring to a boil.
        b. Add the spaghetti and cook according to the package instructions or until al dente.
        c. Drain the spaghetti and set aside.
    
        Assembly:
        a. Serve the meatballs and sauce over the cooked spaghetti.
        b. Garnish with fresh basil or parsley if you have some on hand.
        c. Optional: sprinkle with grated cheese, like Parmesan, for an extra touch.
    
    Enjoy your meal!`;

  const openai = new OpenAI({
    apiKey: "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",
    dangerouslyAllowBrowser: true,
  });

  async function gpt() {
    const res = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });
    const recipe = res.choices[0].message.content;
    setRecipes(recipe);
  }

  console.log(foods);
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
