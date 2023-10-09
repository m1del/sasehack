"use client"
import { TypeAnimation } from "react-type-animation";

function TypeAnim() {
    return (
      <div>
        <TypeAnimation
        sequence={[
          "I have most cookware available at my disposal such as a stove, oven, microwave, air fryer, toaster, kettle, along with utensils like kitchen knives, spatulas, etc. ",
          'Grocery List',
          500,
        ]}
        style={{ fontSize: '2em' }}
        repeat={0}
        />
      </div>
    );
  }
  
  export default TypeAnim;
  
