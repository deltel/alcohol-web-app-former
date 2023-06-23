import styles from './recent-item.module.css';

export default function RecentItem({
    date,
    source,
    quantity,
    price,
}: {
    date: string;
    source: string;
    quantity: number;
    price: number;
}) {
    return (
        <div className={styles.item}>
            <span className={styles.lightGreen}>{date}</span>
            <span className={styles.center}>
                <span>{source}</span>
                <span>{quantity}</span>
            </span>
            <span className={styles.lightGreen}>{price}</span>
        </div>
    );
}
