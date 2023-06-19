import Card from '../card/card';

import styles from './title.module.css';

export default function Title({ title }: { title: string }) {
    return (
        <Card>
            <h2 className={styles.title}>{title}</h2>
        </Card>
    );
}
