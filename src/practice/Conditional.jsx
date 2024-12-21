function MissedGoal() {
  return (
    <div>
      <h1>Missed Goal!</h1>
    </div>
  );
}

function Goal() {
  return (
    <div>
      <h1>Goal</h1>
    </div>
  );
}
/* 
export default function IsGoal(props) {
  if (props.isGoal) {
    return <Goal />;
  } else {
    return <MissedGoal />;
  }
} */


/* export default function Conditional(props){
    const cars = props.cars
    return <div>{cars.length > 0 && <h1>Currently available cars are {cars}</h1>}</div>
} */

export default function Conditional(){
    const isGoal = false
    return <div>{isGoal ? <Goal /> : <MissedGoal />}</div>
}