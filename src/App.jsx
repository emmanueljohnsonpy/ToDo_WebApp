import React, { useEffect } from "react";
import Header from "./components/Header";
import Todo from "./components/Todo";
import "./App.css";

import Footer from "./components/Footer";
import Print from "./comp/Print";
import List from "./comp/Map";
import MyResearch from "./comp/MyResearch";
import Components from './comp/Components';

function App() {
  useEffect(() => {
    document.title = "My Todo App";
  }, []);

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
    </div>
  );
}

export default App;
