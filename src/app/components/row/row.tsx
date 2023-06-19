import styles from './row.module.css';

export default function Row({
    firstItem,
    secondItem,
    textStyle = '',
}: {
    firstItem: string;
    secondItem: string | number;
    textStyle?: string;
}) {
    return (
        <div className={styles.row}>
            <span className={textStyle}>{firstItem}</span>
            <span className={textStyle}>{secondItem}</span>
        </div>
    );
}
