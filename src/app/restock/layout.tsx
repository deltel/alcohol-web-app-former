import ProductList from '../components/product/product-list/product-list';

import styles from './page.module.css';

export default function RestockLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.layout}>
            <ProductList single />
            <div className={styles.order}>{children}</div>
        </div>
    );
}
