import { useState } from "react";

export default function Forms() {
  const [word, setWord] = useState("");
  const handlesubmit = (event) => {
    event.preventDefault();
    alert(`You entered word was ${word}`);
  };
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <label>Enter your name ?</label>
        <input
          type="text"
          value={word}
          onChange={(e) => setWord(e.target.value)}
        ></input>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
