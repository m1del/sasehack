import { useEffect, useState } from "react";

function RecipeDisplay() {
    const [recipe, setRecipe] = useState('');

    useEffect(() => {
        async function fetchRecipe() {
            const res = await fetch('http://localhost:5000/get_recipe');
            const data = await res.json();
            setRecipe(data.recipe);
        }

        fetchRecipe();
    }, []);

    return (
        <div>
            <h1>Generated Recipe</h1>
            <p>{recipe}</p>
        </div>
    );
}
