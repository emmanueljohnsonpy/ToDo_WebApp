import { useState } from "react";
import styles from "./todoitem.module.css";

export default function TodoItem({ item, todos, setTodos }) {
  const [isEditing, setIsEditing] = useState(false);
  const [newName, setNewName] = useState(item.name);

  function handleDelete(item) {
    console.log("Delete button clicked", item);
    setTodos(todos.filter((todo) => todo !== item));
  }

  function handleCheckboxChange(name) {
    setTodos(
      todos.map((todo) =>
        todo.name === name ? { ...todo, done: !todo.done } : todo
      )
    );
  }

  function handleEditChange(event) {
    setNewName(event.target.value);
  }

  function handleSaveEdit() {
    const trimmedNewName = newName.trim(); // Remove leading and trailing spaces

    if (trimmedNewName === "") {
      alert("Please enter a valid name. The name cannot be empty.");
      return;
    }

    const isNameExists = todos.some(
      (todo) => todo.name === trimmedNewName && todo.name !== item.name
    );
    if (isNameExists) {
      alert("This name already exists. Please choose a different name.");
      return;
    }

    setTodos(
      todos.map((todo) =>
        todo.name === item.name ? { ...todo, name: trimmedNewName } : todo
      )
    );
    setIsEditing(false);
  }

  const completed = item.done ? styles.completed : "";

  return (
    <div className={styles.item}>
      <div className={styles.itemName}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={item.done}
          onChange={() => handleCheckboxChange(item.name)}
        />
        {isEditing ? (
          <input
            type="text"
            value={newName}
            onChange={handleEditChange}
            className={styles.editInput}
          />
        ) : (
          <span
            className={completed}
            onClick={() => handleCheckboxChange(item.name)}
          >
            {item.name}
          </span>
        )}
        <div className={styles.buttons}>
          {isEditing ? (
            <button onClick={handleSaveEdit} className={styles.saveButton}>
              Save
            </button>
          ) : (
            <button
              onClick={() => setIsEditing(true)}
              className={styles.editButton}
            >
              Edit
            </button>
          )}
          <button
            onClick={() => handleDelete(item)}
            className={styles.deleteButton}
          >
            X
          </button>
        </div>
      </div>
      <hr className={styles.line} />
    </div>
  );
}
