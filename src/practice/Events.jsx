export default function Events() {
  // const shoot = () => alert("Ohh bro That's a Goal")
  // return <div><button onClick={shoot}>Click here to shoot</button></div>
  // const shoot = (a) => alert(a)
  // return <div><button onClick={()=>shoot("Raaa")}>OK</button></div>
  //   const test = (e) => console.log(e);
  //   return (
  //     <div>
  //       <button onClick={(e) => test(e)}>ok</button>
  //     </div>
  //   );
  const testing = () => console.log("you hovered to button");
  return (
    <div>
      <button onMouseOver={testing}>Mouse over</button>
    </div>
  );
}
