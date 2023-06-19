import Link from 'next/link';
import styles from './product-list.module.css';

import { getProductList } from '@/app/utils/data';
import ProductItem from '../product-item/product-item';

async function getData() {
    return Promise.resolve(getProductList());
}

export default async function ProductList() {
    const data = await getData();

    return (
        <div className={styles.container}>
            <h2>Stocks</h2>
            <ul className={styles.list}>
                {data.map(({ productId, productName, stockLevel }) => (
                    <li>
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
