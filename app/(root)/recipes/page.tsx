"use client";
import TopBar from "@/app/components/TopBar";
import { config } from "dotenv";
import { collection, getDocs, query, where } from 'firebase/firestore';
import { useEffect, useState } from 'react';
import ExpiringFood from '../../components/ExpiringFood';
import { db } from '../../services/firebase.js';
config();


import { OpenAI } from "openai";
import readline from "readline";

function ExpiringFoodList() {
    const [foods, setFoods] = useState([]);
    const [recipes, setRecipes] = useState("")


    useEffect(() => {
        async function fetchFoods() {
            const res = await fetch('http://localhost:5000/expiring_ingredients');
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

    const prompt = "I have most cookware available at my disposal such as a stove, oven, microwave, air fryer, toaster, kettle, along with utensils like kitchen knives, spatulas, etc. "
    "I have these ingredients: {ingredients}. "
    "Give me a recipe that includes most, if not all of these ingredients. "
    "You may include other ingredients from my kitchen, such as {inventory} "
    "and items that are common to most households, like salt, pepper, oregano, and garlic powder. "
    "What can I make as well as the instructions?"

    const openai = new OpenAI({
        apiKey: "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", dangerouslyAllowBrowser:true,
      });
      
    async function gpt(){
        const res = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{ role: "user", content: prompt }],
          });
          const recipe = (res.choices[0].message.content);
          setRecipes(recipe)
    }


    console.log(foods)
    return (
        <>
        <TopBar page="Recipe"/>
        <div className="flex-expired">
            <div className="expiredfoods">
            <ExpiringFood name={"chicken"} expires ={2}/>
            <ExpiringFood name={"potatoes"} expires = {2}/>
            </div>
            <textarea name="" id="" cols="40" rows="20">{recipes}</textarea>
        </div>
        </>
    
    );
}

export default ExpiringFoodList;


