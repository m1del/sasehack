"use client";
import { TypeAnimation } from "react-type-animation";

function TypeAnim() {
  return (
    <div>
      <TypeAnimation
        sequence={[
          `
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
          
          Enjoy your meal!`,
          500,
        ]}
        speed={90}
        style={{
          backgroundColor: "#fff",
          lineHeight: 1.25,
          fontWeight: 600,
          fontSize: "1.6rem",
          whiteSpace: "pre-line",
        }}
        repeat={0}
      />
    </div>
  );
}

export default TypeAnim;
