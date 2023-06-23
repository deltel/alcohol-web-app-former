'use client';

import { useState } from 'react';

import styles from '../page.module.css';
import OrderSummary from '@/app/components/order/order-summary/order-summary';
import Confirmation from '@/app/components/confirmation/confirmation';
import ProductSpecification from '@/app/components/product-specification/product-specification';

export default function Restock({ children }: { children: React.ReactNode }) {
    const [selectedProduct, setSelectedProduct] = useState({
        productId: 'sorrel-rum',
        productName: 'Sorrel Rum',
        quantity: 0,
        unitPrice: 1000,
        totalPrice: 1000,
    });

    return (
        <>
            <div className={styles.orderDetails}>
                <OrderSummary orderId="June" />
                <Confirmation prompt="Is the order complete?" />
            </div>
            <div className={styles.productDetails}>
                <ProductSpecification
                    options={[{ label: 'Sorrel Rum', value: 'sorrel rum' }]}
                    unitPrice={1000}
                />
                {children}
            </div>
        </>
    );
}
