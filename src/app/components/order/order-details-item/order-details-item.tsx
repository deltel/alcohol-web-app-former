import { ProductOrder } from '../../product/contract';
import styles from './order-details-item.module.css';

export default function OrderDetailsItem({
    customerName,
    orderTotal,
    items,
}: {
    customerName: string;
    orderTotal: number;
    items: ProductOrder[];
}) {
    return (
        <div className={styles.item}>
            <div className={styles.info}>
                <span>{customerName}</span>
                <span>{orderTotal}</span>
            </div>
            <ul className={styles.list}>
                {items.map(({ quantity, productName }) => (
                    <li key={`${quantity}-${productName}`}>
                        {`${quantity} ${productName}`}
                    </li>
                ))}
            </ul>
        </div>
    );
}
