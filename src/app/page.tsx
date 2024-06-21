import { Name } from "@/components/Name/Name";
import styles from "./page.module.css";
import { Navbar } from "@/components/Navbar/Navbar";
import { Projects } from "@/components/Projects/Projects";

export default function Home() {

  let projects = ["Project", "Project", "Project", "Project", "Project", "Project", "Project", "Project", "Project", "Project", "Project", "Project"]

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
