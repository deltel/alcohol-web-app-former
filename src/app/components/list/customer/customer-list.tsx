import Link from 'next/link';
import styles from '../list.module.css';

import { getCustomerList } from '@/app/utils/data';
import { RouteParams } from '@/app/utils/route-params';
import ListItem from '../list-item';

async function getData() {
    return Promise.resolve(getCustomerList());
}

export default async function CustomerList({
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
            <h2>Customers</h2>
            <ul className={styles.list}>
                {data.map(({ customerId, customerName, balance }) => (
                    <li className={single ? styles.single : ''}>
                        <Link href={`/${RouteParams.Customers}/${customerId}`}>
                            <ListItem label={customerName} figure={balance} />
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}
