import styles from './page.module.css';

import ProductList from '@/app/components/list/product/product-list';
import OrderSummary from '@/app/components/order/order-summary/order-summary';
import OrderDetailsList from '@/app/components/order/order-details-list/order-details-list';

import { getOrderSummary, getOrdersList } from '@/app/utils/data';

async function getOrderSummaryData(orderId: string) {
    return Promise.resolve(getOrderSummary(orderId));
}

async function getOrdersListData(orderId: string) {
    return Promise.resolve(getOrdersList(orderId));
}

export default async function Order({ params }: { params: { slug: string } }) {
    const orderSummaryData = getOrderSummaryData(params.slug);
    const ordersData = getOrdersListData(params.slug);

    const [{ title, expectedRevenue }, orders] = await Promise.all([
        orderSummaryData,
        ordersData,
    ]);

    return (
        <div className={styles.container}>
            <ProductList single />
            <OrderSummary
                title={title}
                subTitle="Expected Revenue"
                amount={expectedRevenue}
                orders={orders}
            />
            <OrderDetailsList orderId={params.slug} />
        </div>
    );
}
