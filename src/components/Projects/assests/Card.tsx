import styles from './Card.module.css'

interface CardProps {
    title: string;
}

export const Card: React.FC<CardProps> = ({title}) => {
    return (
        <span className={styles.card}>
            {title}
        </span>
    );
};