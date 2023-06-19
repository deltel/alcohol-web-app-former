import Row from '../../row/row';
import { ProductPreview } from '../contract';

import styles from './product-item.module.css';

export default function ProductItem({
    productName,
    stockLevel,
}: Omit<ProductPreview, 'productId'>) {
    return (
        <Row
            firstItem={productName}
            secondItem={stockLevel}
            textStyle={styles.padding}
        />
    );
}
