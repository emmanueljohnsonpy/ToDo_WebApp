import React, { useEffect } from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";
import "./App.css";

function App() {
  useEffect(() => {
    document.title = "My Todo App"; 
  }, []);

  return (
    <div className="App">
      <Header />
      <Todo />
    </div>
  );
}

export default App;
