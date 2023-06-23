import { getOrderSummary } from '@/app/utils/data';
import Card from '../../card/card';
import Title from '../../title/title';
import OrderSummaryList from '../order-summary-list/order-summary-list';

import styles from './order-summary.module.css';

export async function getData(orderId: string) {
    return Promise.resolve(getOrderSummary(orderId));
}

export default async function OrderSummary({ orderId }: { orderId: string }) {
    const { expectedRevenue, title } = await getData(orderId);

    return (
        <div className={styles.container}>
            <Title title={title} />
            <OrderSummaryList orderId={orderId} />
            <Card>
                <span>Expected Revenue</span>
                <span className={styles.expectedRevenue}>
                    {expectedRevenue}
                </span>
            </Card>
        </div>
    );
}
