import { useState } from "react";

export default function Sample() {
  const [value, setValue] = useState("");
  const [items, setItems] = useState([]);
  function handleSubmit(e) {
    e.preventDefault();
    setItems([...items, value]);
    setValue("");
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
      {items.map((item, index) => (
        <h1 key={index}>{item}</h1>
      ))}
    </div>
  );
}
