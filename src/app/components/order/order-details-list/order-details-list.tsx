import { getOrderDetails } from '@/app/utils/data';
import Card from '../../card/card';
import OrderDetailsItem from '../order-details-item/order-details-item';

import styles from './order-details-list.module.css';

async function getData(orderId: string) {
    return Promise.resolve(getOrderDetails(orderId));
}

export default async function OrderDetailsList({
    orderId,
}: {
    orderId: string;
}) {
    const data = await getData(orderId);

    return (
        <Card
            style={{
                flex: 1,
                height: 'var(--max-height)',
                padding: '2em',
            }}
        >
            <h2 className={styles.heading}>Order Details</h2>
            <ul className={styles.list}>
                {data.map(({ customerName, orderTotal, items }) => (
                    <li className={styles.order}>
                        <OrderDetailsItem
                            customerName={customerName}
                            orderTotal={orderTotal}
                            items={items}
                        />
                    </li>
                ))}
            </ul>
        </Card>
    );
}
