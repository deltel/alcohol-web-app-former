import Link from 'next/link';
import styles from './product-list.module.css';

import { getProductList } from '@/app/utils/data';
import ProductItem from '../product-item/product-item';

async function getData() {
    return Promise.resolve(getProductList());
}

export default async function ProductList({
    single = false,
}: {
    single?: boolean;
}) {
    const data = await getData();
    const classes = single
        ? `${styles.container} ${styles.singleWidth}`
        : styles.container;

    return (
        <div className={classes}>
            <h2>Stocks</h2>
            <ul className={styles.list}>
                {data.map(({ productId, productName, stockLevel }) => (
                    <li className={single ? styles.single : ''}>
                        <Link href={`/products/${productId}`}>
                            <ProductItem
                                productName={productName}
                                stockLevel={stockLevel}
                            />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
