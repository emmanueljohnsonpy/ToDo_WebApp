import React, { useEffect } from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";
import "./App.css";

import Footer from "./components/Footer";
import Print from "./practice/Print";
import List from "./practice/Map";
import MyResearch from "./practice/MyResearch";
import Components from "./practice/Components";
import { Props } from "./practice/Props";
import Events from "./practice/Events";
import Conditional from "./practice/Conditional";
import IsGoal from "./practice/Conditional";
import Lists from "./practice/Lists";
import Forms from "./practice/Forms";
import Styling from "./practice/Styling";
import Hook from "./practice/Hook.jsx";
import State from "./practice/State.jsx";
import Effect from "./practice/Effect.jsx";

function App() {
  useEffect(() => {
    document.title = "My Todo App";
  }, []);
  const fruit = "Apple";
  const person = { name: "Ronaldo", team: "Portugal" };
  let isGoal = false;
  const cars = ["BMW", "Ford", "Benz"];
  return (
    <div className="App">
      {/*  <Header />
      <Todo />
      <Footer /> */}
      {/* <Print /> */}
      {/* <List /> */}
      {/* {sample()} */}
      {/* <MyResearch /> */}
      {/* <Components /> */}
      {/* <Props value="wwcd" /> */}
      {/* <Props value={fruit} /> */}
      {/* <Props value = {person} /> */}
      {/* <Events /> */}
      {/* <IsGoal isGoal={isGoal} /> */}
      {/* <Conditional/> */}
      {/* <Lists /> */}
      {/* <Forms /> */}
      {/* <Styling /> */}
      {/* <Hook /> */}
      {/* < State /> */}
      <Effect />
    </div>
  );
}

export default App;
