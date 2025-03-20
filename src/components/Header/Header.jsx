import Navigation from "./Navigation/Navigation";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <p className={styles.logo}>Startup 3</p>
      <Navigation />
    </header>
  );
}
