import ProductList from '@/app/components/product/product-list/product-list';
import OrderSummary from '@/app/components/order/order-summary/order-summary';

import styles from './page.module.css';

export default function Order({ params }: { params: { slug: string } }) {
    return (
        <div className={styles.container}>
            <ProductList single />
            <OrderSummary orderId={params.slug} />
        </div>
    );
}
