// Creating and nesting components

import { useState } from "react";

/* export default function MyButton(){
    return <button>Ok Click here</button>
} */

// Writing markup with JSX

/* export default function Testing() {
  return (
    <>
      <h1>About</h1>
      <p>
        <br />
        How do you do?
      </p>
    </>
  );
} */

// Adding styles

/* export default function Rough() {
  const style = { backgroundColor: "aqua" };
  return <h1 style={style}>Hai How are you ?</h1>;
} */
/* import "./Practice.css";
export default function Rough() {
  return <h1 className="item">Hai how are you ?</h1>;
} */
/* import styles from "./Practice.module.css";
export default function Rough() {
  return <h1 className={styles.item}>Hai how are you</h1>;
} */

// Displaying Data

/* const user = {
  name: "Cristiano Ronaldo",
  imageUrl: "https://pbs.twimg.com/media/FUVqXAjXsAYLA8t.jpg",
  imageSize: 90,
};

export default function Profile() {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        src={user.imageUrl}
        style={{ width: user.imageSize, height: user.imageSize }}
      ></img>
    </>
  );
} */

// Conditional rendering

/* export default function Testing() {
  const flag = false;
  return <>{flag ? <Profile /> : <Rough />}</>;
} */

// Rendering lists

/* export default function Rough() {
  const products = [
    { title: "Cabbage", isFruit: false, id: 1 },
    { title: "Garlic", isFruit: false, id: 2 },
    { title: "Apple", isFruit: true, id: 3 },
  ];
  const listitems = products.map((item) => (
    <li key={item.id} style={{ color: item.isFruit ? "Red" : "green" }}>
      {item.title}
    </li>
  ));
  return <ol>{listitems}</ol>;
} */

// Responding to events

/* export default function MyFunc() {
  function handleClick() {
    alert("You Clicked Me");
  }
  return (
    <div>
      <button onClick={handleClick}>Don't click here ok</button>
    </div>
  );
} */

// Updating the screen

/* export default function Rough() {
  const [count, setCount] = useState(0);
  function handleChange() {
    setCount(count + 1);
  }
  return (
    <div>
      <button onClick={handleChange}>Clicked {count} times</button>
    </div>
  );
} */

export default function MyButton({count, onclick}){
    return <button onClick={onclick}>Click {count} times</button>
}