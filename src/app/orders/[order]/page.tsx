import ProductList from '@/app/components/list/product/product-list';
import OrderSummary from '@/app/components/order/order-summary/order-summary';
import OrderDetailsList from '@/app/components/order/order-details-list/order-details-list';

import styles from './page.module.css';

export default function Order({ params }: { params: { slug: string } }) {
    return (
        <div className={styles.container}>
            <ProductList single />
            <OrderSummary orderId={params.slug} />
            <OrderDetailsList orderId={params.slug} />
        </div>
    );
}
