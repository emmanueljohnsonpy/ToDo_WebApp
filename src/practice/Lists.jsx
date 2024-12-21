/* function Cars(props) {
  return <li>{props.cars} {props.index}</li>;
}

export default function Garage() {
  const my_cars = ["BMW", "Audi", "Benz", "Porsche"];
  return (
    <>
      <h1>Who lives in my Garage</h1>
      <ol>
        {my_cars.map((item, index) => (
          <Cars key={index} cars={item} index={index} />
        ))}
      </ol>
    </>
  );
}
 */

function List(props) {
  return (
    <div>
      <li>
        {props.name}, {props.team}
      </li>
    </div>
  );
}

export default function Players() {
  const players = [
    { name: "Ronaldo", team: "Portugal" },
    { name: "Messi", team: "Argentina" },
    { name: "Neymar", team: "Brazil" },
  ];
  return (
    <div>
      {players.map((player, index) => (
        <List key={index} name={player.name} team={player.team} />
      ))}
    </div>
  );
}
