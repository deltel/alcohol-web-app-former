import { getOrdersList } from '@/app/utils/data';
import styles from './order-list.module.css';
import OrderItem from '../order-item/order-item';

async function getData(orderId: string) {
    return Promise.resolve(getOrdersList(orderId));
}

export default async function OrderList({ orderId }: { orderId: string }) {
    const orders = await getData(orderId);
    return (
        <ul className={styles.list}>
            {orders.map(({ productName, quantity, revenue }) => (
                <li>
                    <OrderItem
                        productName={productName}
                        quantity={quantity}
                        revenue={revenue}
                    />
                </li>
            ))}
        </ul>
    );
}
