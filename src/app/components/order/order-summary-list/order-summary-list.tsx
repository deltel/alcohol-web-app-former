import { getOrdersList } from '@/app/utils/data';
import OrderSummaryItem from '../order-item/order-summary-item';

import styles from './order-summary-list.module.css';

async function getData(orderId: string) {
    return Promise.resolve(getOrdersList(orderId));
}

export default async function OrderSummaryList({
    orderId,
}: {
    orderId: string;
}) {
    const orders = await getData(orderId);
    return (
        <ul className={styles.list}>
            {orders.map(({ productName, quantity, revenue }) => (
                <li>
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
