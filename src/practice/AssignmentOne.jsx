import styles from "./AssignmentOne.module.css";

export default function PlayerDetails({ player }) {
  return (
    <div className={styles.background}>
      <h1 className={styles.header}>{player.name}</h1>
      <p className={styles.para}>{player.email}</p>
    </div>
  );
}
