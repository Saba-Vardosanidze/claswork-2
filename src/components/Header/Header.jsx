import Navigation from "./Navigation/Navigation";
import styles from "./Header.module.css";
export default function Header() {
  return (
    <header className={styles.headerContainer}>
      <a href="#" className={styles.logo}>
        Startup 3
      </a>
      <Navigation />
    </header>
  );
}
