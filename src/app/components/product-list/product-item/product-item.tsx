import { Product } from '../contract';
import styles from './product-item.module.css';

export default function ProductItem({ productName, stockLevel }: Product) {
    return (
        <div className={styles.product}>
            <span>{productName}</span>
            <span>{stockLevel}</span>
        </div>
    );
}
