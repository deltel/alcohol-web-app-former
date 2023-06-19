import { getProduct, getOrderHistory } from '@/app/utils/data';
import { Product } from '../contract';
import styles from './product-details.module.css';
import Card from '../../card/card';
import Row from '../../row/row';
import Table from '../../table/table';

async function getProductInfo(productId: string) {
    return Promise.resolve(getProduct(productId));
}

async function getOrders(productId: string) {
    return Promise.resolve(getOrderHistory(productId));
}

export default async function ProductDetails({
    productId,
}: Pick<Product, 'productId'>) {
    const {
        productName,
        stockLevel,
        totalCost,
        totalOrders,
        totalProfit,
        totalRevenue,
        totalValue,
    } = await getProductInfo(productId);
    const { columns, data } = await getOrders(productId);

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <div className={styles.left}>
                    <Card>
                        <h2 className={styles.title}>{productName}</h2>
                    </Card>
                    <Card dark>
                        <div className={styles.assets}>
                            <Row firstItem="Stocks" secondItem={stockLevel} />
                            <Row firstItem="Value" secondItem={totalValue} />
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
                        <div className={styles.breakdown}>
                            <Row
                                firstItem="Total Orders"
                                secondItem={totalOrders}
                            />
                            <Row
                                firstItem="Total Cost"
                                secondItem={totalCost}
                            />
                            <Row
                                firstItem="Total Revenue"
                                secondItem={totalRevenue}
                            />
                            <Row
                                firstItem="Total Profit"
                                secondItem={totalProfit}
                            />
                        </div>
                    </Card>
                </div>
            </div>
            <div className={styles.table}>
                <Table columns={columns} data={data} />
            </div>
        </div>
    );
}
