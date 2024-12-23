import { useState } from "react";

// Read State

/* export default function State(){
    const [color, setColor] = useState("Red")
    return <h1>My favorite color is {color}</h1>
} */

// Update State

/* export default function Update() {
  const [color, setColor] = useState("Red");
  return (
    <div>
      <h1>hai my favorite color is {color}</h1>
      <button onClick={() => setColor("Blue")}>Blue</button>
      <button onClick={() => setColor("Red")}>Red</button>
    </div>
  );
} */

// What can State Hold

/* export default function Car() {
  const [brand, setBrand] = useState("Ford");
  const [color, setColor] = useState("Red");
  const [model, setModel] = useState("Mustang");
  const [year, setYear] = useState("1964");
  return (
    <>
      <h1>My {brand}</h1>
      <p>
        It is a {color} {model} from {year}
      </p>
    </>
  );
}
 */

// or
/* 
export default function State() {
  const [car, setCar] = useState({
    brand: "Ford",
    color: "Red",
    model: "Mustang",
    year: 1964,
  });
  return (
    <div>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}
      </p>
    </div>
  );
}
 */

// Updating

export default function State() {
  const [car, setCar] = useState({
    brand: "Ford",
    color: "Blue",
    model: "Mustang",
    year: 1964,
  });
  const changeColor = () => setCar((prev) => ({ ...prev, color: "Black" }));
  return (
    <div>
      <h1>My {car.brand}</h1>
      <p>
        It is a {car.color} {car.model} from {car.year}
      </p>
      <button type="button" onClick={changeColor}>
        Change color to Black
      </button>
    </div>
  );
}
