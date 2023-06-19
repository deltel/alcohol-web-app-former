import { getExpectedRevenue } from '@/app/utils/data';
import Card from '../../card/card';
import Title from '../../title/title';
import OrderList from '../order-list/order-list';
import styles from './order-summary.module.css';

export async function getData(orderId: string) {
    return Promise.resolve(getExpectedRevenue(orderId));
}

export default async function OrderSummary({ orderId }: { orderId: string }) {
    const expectedRevenue = await getData(orderId);

    return (
        <div className={styles.container}>
            <Title title="June" />
            <OrderList orderId={orderId} />
            <Card>
                <span>Expected Revenue</span>
                <span className={styles.expectedRevenue}>
                    {expectedRevenue}
                </span>
            </Card>
        </div>
    );
}
