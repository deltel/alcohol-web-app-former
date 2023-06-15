import Link from 'next/link';
import styles from './product-list.module.css';

import { getData } from '@/app/utils/data';

import ProductItem from './product-item/product-item';

export default function ProductList() {
    const data = getData();

    return (
        <div className={styles.container}>
            <h2>Stocks</h2>
            <ul className={styles.list}>
                {data.map(({ productName, stockLevel }) => (
                    <li>
                        <Link href="/">
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
