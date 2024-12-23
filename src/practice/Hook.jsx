import { useState } from "react";

export default function Colors() {
  const [color, setColor] = useState("Red");
  return (
    <div>
      <h1>I love {color} color</h1>
      <button onClick={() => setColor("Green")}>Green</button>
      <button onClick={() => setColor("Yellow")}>Yellow</button>
      <button onClick={() => setColor("Blue")}>Blue</button>
    </div>
  );
}
