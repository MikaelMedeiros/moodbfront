import styles from '././project.module.css';
import Link from 'next/link';


type projectProps = {
    id: number,
    name: string,
}




export const Project: React.FunctionComponent<projectProps> = (props) => {

    return (
        <div className={styles.root}>
            <Link href={`/projectDetail/${props.id}`}>
                <a>
                    <p className={styles.paragraph}>{props.name}</p>
                    <div className='bg-gray-200 h-20 relative '></div>
                </a>
            </Link>
        </div>
    );
};