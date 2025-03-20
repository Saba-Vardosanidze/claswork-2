import styles from "./Button.module.css";
export default function Button({ mybtn }) {
  return <button className={styles.myButton}>{mybtn}</button>;
}
