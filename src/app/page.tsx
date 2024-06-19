import { Name } from "@/components/Name/Name";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Projects } from "@/components/Projects/Projects";

export default function Home() {

  let projects = ["Project 1", "Project 2", "Project 3", "Project 4", "Project 5", "Project 6", "Project 7", "Project 8"]

  return (
    <>
      <div className={styles.container}>

        <div className={styles.navbar}>
          <Navbar/>
        </div>

        <div className={styles.center}>
          <Name/>
        </div>

        <div>
          <Projects cards={projects}></Projects>
        </div>
         
      </div>
    </>
  );
}
