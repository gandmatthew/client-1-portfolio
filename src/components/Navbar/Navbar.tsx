import styles from "./Navbar.module.css";

export const Navbar = () => {
    return (
        <div className={styles.container}>
            <ul className={styles.ul}>
                <li className={styles.li}><a className={styles.a}>Publications</a></li>
                <li className={styles.li}><a className={styles.a}>About</a></li>
                <li className={styles.li}><a className={styles.a}>Contact</a></li>
                <li className={styles.li}><a className={styles.a}>LinkedIn</a></li>
                <li className={styles.li}><a className={styles.a}>Resume</a></li>
            </ul>
        </div>
    );
}
