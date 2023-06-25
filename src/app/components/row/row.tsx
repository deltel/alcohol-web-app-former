import styles from './row.module.css';

export default function Row({
    firstItem,
    secondItem,
    textStyle = '',
    danger = false,
}: {
    firstItem: string;
    secondItem: string | number;
    textStyle?: string;
    danger?: boolean;
}) {
    const className = danger ? `${styles.row} ${styles.danger}` : styles.row;
    return (
        <div className={className}>
            <span className={textStyle}>{firstItem}</span>
            <span className={textStyle}>{secondItem}</span>
        </div>
    );
}
