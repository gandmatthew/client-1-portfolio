import { Name } from "@/components/Name/Name";
import styles from "./page.module.css";

export default function Home() {
  return (
    <>
      <div className={styles.container}>

        <div className={styles.center}>
          <Name/>
        </div>

        <div className={styles.grid}>
          <div className={styles.card}>Project 1</div>
          <div className={styles.card}>Project 2</div>
          <div className={styles.card}>Project 3</div>
          <div className={styles.card}>Project 4</div>
          <div className={styles.card}>Project 5</div>
          <div className={styles.card}>Project 6</div>
          <div className={styles.card}>Project 7</div>
          <div className={styles.card}>Project 8</div>
        </div>
         
      </div>
    </>
  );
}
