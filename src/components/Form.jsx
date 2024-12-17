import { useState } from "react";
import styles from "./form.module.css";

export default function Form({ todos, setTodos }) {
  // const [todo, setTodo] = useState("");
  const [todo, setTodo] = useState({ name: "", done: false });

  function handleSubmit(e) {
    e.preventDefault();

    if (
      todo.name.trim() !== "" &&
      !todos.some(
        (t) => t.name.toLowerCase() === todo.name.trim().toLowerCase()
      )
    ) {
      setTodos([...todos, todo]);
      setTodo({ name: "", done: false });
    } else if (todo.name.trim() === "") {
      alert("Please enter a valid todo item.");
    } else {
      alert("This todo item already exists.");
    }
  }
  return (
    <form className={styles.todoform} onSubmit={handleSubmit}>
      <div className={styles.inputContainer}>
        <input
          className={styles.modernInput}
          onChange={(e) => setTodo({ name: e.target.value, done: false })}
          value={todo.name}
          type="text"
          placeholder="Enter your to-do item here"
        />
        <button className={styles.modernButton} type="submit">
          Add
        </button>
      </div>
    </form>
  );
}
