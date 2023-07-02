'use client';

import styles from './order-summary.module.css';

import Card from '../../card/card';
import Title from '../../title/title';
import OrderSummaryList from '../order-summary-list/order-summary-list';

import { OrderPreview } from '../../product/contract';

export default function OrderSummary({
    title,
    subTitle,
    amount,
    orders,
}: {
    title: string;
    subTitle: string;
    amount: number;
    orders: OrderPreview[];
}) {
    return (
        <div className={styles.container}>
            <Title title={title} />
            <OrderSummaryList orders={orders} />
            <Card>
                <span>{subTitle}</span>
                <span className={styles.amount}>{amount}</span>
            </Card>
        </div>
    );
}
