import { useState } from "react";

export default function Todoapp() {
  // State to hold the current input value and the list of tasks
  const [name, setName] = useState("");
  const [tasks, setTasks] = useState([]);

  // Handle input changes
  function handleInputChange(e) {
    setName(e.target.value);
  }

  // Handle form submission
  function handleSubmit(e) {
    e.preventDefault(); // Prevent the default form submission
    if (name) {
      setTasks([...tasks, name]); // Add the new task to the list
      setName(""); // Clear the input field
    }
  }

  return (
    <div>
      <h1>Todo App</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={name}
          onChange={handleInputChange}
          placeholder="Enter a task"
        />
        <button type="submit">Add Task</button>
      </form>
      
      <ul>
        {tasks.map((task, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
}
