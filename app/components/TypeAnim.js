"use client"
import {TypeAnimation} from "react-type-animation";

function TypeAnim() {
    return (
      <div>
        <TypeAnimation
        sequence={[
          'Grocery',
          500,
          'Grocery List',
          500,
          'Grocery',
          500,
          '',
          500,
        ]}
        style={{ fontSize: '2em' }}
        repeat={Infinity}
        />
      </div>
    );
  }
  
  export default TypeAnim;
  
