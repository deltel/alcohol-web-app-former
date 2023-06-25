import Card from '../card/card';

import styles from './title.module.css';

export default function Title({
    title,
    className = '',
}: {
    title: string;
    className?: string;
}) {
    return (
        <Card className={className}>
            <h2 className={styles.title}>{title}</h2>
        </Card>
    );
}
