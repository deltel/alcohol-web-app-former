import ProductList from '../components/list/product/product-list';
import ProductProvider from '../providers/product-provider';

import styles from './page.module.css';

export default function RestockLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <div className={styles.layout}>
            <ProductList single />
            <div className={styles.order}>
                <ProductProvider>{children}</ProductProvider>
            </div>
        </div>
    );
}
