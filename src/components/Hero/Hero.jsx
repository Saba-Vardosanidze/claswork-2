import styles from "./Hero.module.css";
export default function Hero() {
  return (
    <div className={styles.heroContainer}>
      <h1 className={styles.siteTitle}>
        Build Your Own Site like a Lego Constructor
      </h1>
      <p className={styles.siteDescription}>
        We have created a new product that will help designers, developers and
        companies create websites for their startups quickly and easily.
      </p>
    </div>
  );
}
