import {
    getCustomerOrders,
    getCustomerInfo,
    getCustomerFavourites,
} from '@/app/utils/data';
import Card from '../../card/card';
import Row from '../../row/row';
import Title from '../../title/title';
import { Customer } from '../../product/contract';

import styles from './customer-details.module.css';
import CustomerOrdersTable from '../customer-table/customer-orders-table';

async function getCustomerDetails(customerId: string) {
    return Promise.resolve(getCustomerInfo(customerId));
}

async function getOrders(customerId: string) {
    return Promise.resolve(getCustomerOrders(customerId));
}

async function getFavourites(customerId: string) {
    return Promise.resolve(getCustomerFavourites(customerId));
}

export default async function CustomerDetails({
    customerId,
}: Pick<Customer, 'customerId'>) {
    const { customerName, dueDate, balance, totalOrders, totalRevenue } =
        await getCustomerDetails(customerId);
    const { columns, data } = await getOrders(customerId);
    const favourites = await getFavourites(customerId);

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.left}>
                    <Title
                        title={customerName}
                        danger={customerId === 'john-doe'}
                    />
                    <Card danger={balance > 0}>
                        <div className={styles.assets}>
                            <Row firstItem="Due" secondItem={dueDate} />
                            <Row firstItem="Tab" secondItem={balance} />
                        </div>
                    </Card>
                    <Card>
                        <div className={styles.revenue}>
                            <Row firstItem="Orders" secondItem={totalOrders} />
                            <Row
                                firstItem="Revenue"
                                secondItem={totalRevenue}
                            />
                        </div>
                    </Card>
                </div>
                <div className={styles.right}>
                    <Card>
                        <h2 className={styles.title}>Favourites</h2>
                        <ol className={styles.breakdown}>
                            {favourites.map(({ productName, revenue }) => (
                                <li key={productName}>
                                    <Row
                                        firstItem={productName}
                                        secondItem={revenue}
                                    />
                                </li>
                            ))}
                        </ol>
                    </Card>
                </div>
            </div>
            <CustomerOrdersTable columns={columns} data={data} />
        </div>
    );
}
