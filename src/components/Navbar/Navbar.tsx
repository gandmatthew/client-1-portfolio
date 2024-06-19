import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.ul}>
                <li className={styles.li}><a className={styles.a} href="#home">Publications</a></li>
                <li className={styles.li}><a className={styles.a} href="#news">About</a></li>
                <li className={styles.li}><a className={styles.a} href="#contact">Contact</a></li>
                <li className={styles.li}><a className={styles.a} href="#about">LinkedIn</a></li>
                <li className={styles.li}><a className={styles.a} href="#about">Resume</a></li>
            </ul>
        </div>
    );
}
