import Card from '../card/card';

import styles from './title.module.css';

export default function Title({
    title,
    className = '',
    danger = false,
}: {
    title: string;
    className?: string;
    danger?: boolean;
}) {
    return (
        <Card className={className} danger={danger}>
            <h2 className={danger ? styles.danger : styles.title}>{title}</h2>
        </Card>
    );
}
