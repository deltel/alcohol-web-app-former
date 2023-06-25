import ProductList from '@/app/components/list/product/product-list';
import ProductDetails from '@/app/components/product/product-details/product-details';

import styles from './page.module.css';

export default function Products({ params }: { params: { slug: string } }) {
    console.log('params', params);
    return (
        <div className={styles.container}>
            <ProductList />
            <ProductDetails productId={params.slug} />
        </div>
    );
}
