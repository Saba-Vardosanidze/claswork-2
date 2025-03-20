import styles from "./Navigation.module.css";
export default function Navigation() {
  return (
    <ul className={styles.listContainer}>
      <li>
        <a href="#">Tour</a>
      </li>
      <li>
        <a href="#">Prices</a>
      </li>
      <li>
        <a href="#">About</a>
      </li>
      <li>
        <a href="#">F.A.Q.</a>
      </li>
      <li>
        <a href="#">Support</a>
      </li>
    </ul>
  );
}
