import { getRecentPurchases } from '@/app/utils/data';

import styles from './recent-purchases.module.css';
import Card from '@/app/components/card/card';
import Title from '@/app/components/title/title';
import RecentItem from '@/app/components/recent/recent-item/recent-item';

async function getData(productId: string) {
    return Promise.resolve(getRecentPurchases(productId));
}

export default async function RecentPurchases({
    params,
}: {
    params: { productId: string };
}) {
    const { productName, recentPurchases } = await getData(params.productId);

    return (
        <Card dark style={{ width: '100%' }}>
            <div className={styles.flexContainer}>
                <Title title={productName} />
                <h3 className={styles.subHeading}>Most Recent Purchases</h3>
                <ul className={styles.list}>
                    {recentPurchases.map(
                        ({ date, source, quantity, totalCost }) => (
                            <li key={`${date}-${source}-${quantity}`}>
                                <RecentItem
                                    date={date}
                                    source={source}
                                    quantity={quantity}
                                    price={totalCost}
                                />
                            </li>
                        )
                    )}
                </ul>
            </div>
        </Card>
    );
}
