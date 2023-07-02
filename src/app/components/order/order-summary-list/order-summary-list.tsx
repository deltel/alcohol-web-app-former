import styles from './order-summary-list.module.css';

import OrderSummaryItem from '../order-item/order-summary-item';
import { OrderPreview } from '../../product/contract';

export default function OrderSummaryList({
    orders,
}: {
    orders: OrderPreview[];
}) {
    return (
        <ul className={styles.list}>
            {orders.map(({ productName, quantity, revenue }) => (
                <li key={productName}>
                    <OrderSummaryItem
                        productName={productName}
                        quantity={quantity}
                        revenue={revenue}
                    />
                </li>
            ))}
        </ul>
    );
}
