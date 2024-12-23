/* import { useState } from "react";

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
 */
import { useState } from "react";
export default function MyForm() {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs(values => ({...values, [name]: value}))
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Enter your name:
      <input 
        type="text" 
        name="username" 
        value={inputs.username || ""} 
        onChange={handleChange}
      />
      </label>
      <label>Enter your age:
        <input 
          type="number" 
          name="age" 
          value={inputs.age || ""} 
          onChange={handleChange}
        />
        </label>
        <input type="submit" />
    </form>
  )
}
