import React, { useEffect } from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";
import "./App.css";
import Todoapp from "./components/Todoapp";
import Footer from "./components/Footer";


function App() {
  useEffect(() => {
    document.title = "My Todo App";
  }, []);

  return (
    <div className="App">

      <Header />
      <Todo />
      <Footer />
    </div>
  );
}

export default App;
