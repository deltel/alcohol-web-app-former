import Link from 'next/link';
import styles from '../list.module.css';

import { getProductList } from '@/app/utils/data';
import ListItem from '../list-item';
import { RouteParams } from '@/app/utils/route-params';

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
                        <Link href={`/${RouteParams.Products}/${productId}`}>
                            <ListItem label={productName} figure={stockLevel} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
