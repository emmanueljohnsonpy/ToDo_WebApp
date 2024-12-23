// import './Styling.css'
import styles from "./Styling.module.css";

// Inline Styling

/* export default function Inline() {
    const myStyle = {
        backgroundColor: "yellow",
        fontFamily: "Sans-serif",
        padding: "10px"
    }
  return (
    <div>
      <h1 style={{ color: "white", backgroundColor: "orange" }}>Hai this is writing for testing purpose </h1>
      <h2 style={myStyle}>This is also for testing purpose</h2>
    </div>
  );
}
 */

// CSS Style Sheets

/* export default function Testing() {
  return (
    <div>
      <h1>This is for testing purpose</h1>
      <h2 className="sample">This is for another testing purpose</h2>
      <h3 id='sampleid'>yo</h3>
    </div>
  );
}
 */

// CSS Modules

export default function Testing() {
  return (
    <div className={styles.testing}>
      <h1>Hai this is for testing</h1>
    </div>
  );
}
