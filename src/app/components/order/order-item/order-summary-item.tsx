import styles from './order-summary-item.module.css';

export default function OrderSummaryItem({
    productName,
    quantity,
    revenue,
}: {
    productName: string;
    quantity: number;
    revenue: number;
}) {
    return (
        <div className={styles.item}>
            <span className={styles.details}>
                <span>{productName}</span>
                <span>{quantity}</span>
            </span>
            <span className={styles.revenue}>{revenue}</span>
        </div>
    );
}
