import styles from "./Card.module.css";
export default function Card() {
  return (
    <div className={styles.paragraphContainer}>
      <p className={styles.myParagraph}>
        A high-quality solution for a beautiful startup website.
      </p>
      <div className={styles.myParagraphWidthBorder}>
        <p className={styles.myParagraph}>
          Startups can save money on design and code and use those savings to
          develop the business.
        </p>
      </div>
      <p className={styles.myParagraph}>
        Startup Framework includes great form options for your startup projects.
      </p>
    </div>
  );
}
