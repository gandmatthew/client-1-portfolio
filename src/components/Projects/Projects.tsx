import styles from './Projects.module.css'
import { Card } from './assests/Card'

interface ProjectsProps {
    cards: string[];
}

export const Projects: React.FC<ProjectsProps> = ({cards}) => {

    const card = cards.map(c => c)

    return (
        <div className={styles.grid}>
            {
                cards.map((c, index) => <Card key={index} title={`${c} ${index}`}></Card>)
            }
        </div>
    )
}   