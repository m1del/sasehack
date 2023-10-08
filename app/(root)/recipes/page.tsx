"use client";
import { useEffect, useState } from 'react';
import ExpiringFood from '../../components/ExpiringFood';

function ExpiringFoodList() {
    const [foods, setFoods] = useState([]);

    useEffect(() => {
        async function fetchFoods() {
            const res = await fetch('http://localhost:5000/expiring_ingredients');  // This endpoint should return more detailed data like id, purchase date, expiry date, location, etc.
            const data = await res.json();
            setFoods(data.foods);  // Assuming the Flask endpoint returns a `foods` key in the JSON
        }

        fetchFoods();
    }, []);

    return (
        <div>
            {foods.map(food => (
                <ExpiringFood 
                    key={food.id} 
                    id={food.id}
                    name={food.name}
                    purchase={food.purchase} // You might need to adjust the date format or calculation
                    expires={food.expires}   // Same here
                    location={food.location}
                />
            ))}
        </div>
    );
}

export default ExpiringFoodList;
