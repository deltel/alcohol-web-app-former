'use client';

import { useContext, useState } from 'react';
import { useRouter } from 'next/navigation';

import styles from '../page.module.css';

import OrderSummary from '@/app/components/order/order-summary/order-summary';
import Confirmation from '@/app/components/confirmation/confirmation';
import ProductSpecification from '@/app/components/product-specification/product-specification';
import { ProductContext } from '@/app/providers/product-provider';

export default function Restock({ children }: { children: React.ReactNode }) {
    const {
        productName,
        total,
        orders,
        handleAdd,
        handleCancel,
        handleConfirm,
        handleProductChange,
    } = useContext(ProductContext);

    const [selected, setSelected] = useState(productName);
    const [options, setOptions] = useState([
        { label: 'Sorrel Rum', value: 'sorrel-rum', unitPrice: 1000 },
        { label: 'Red Label', value: 'red-label', unitPrice: 1100 },
    ]);

    const selectedOption = options.find((option) => option.value === selected);

    const router = useRouter();
    const handleSelect = (e: any) => {
        const value = e.target.value;
        console.log('value', value);
        setSelected(value);
        handleProductChange(value);
        router.push(`/restock/${value}`);
    };

    return (
        <>
            <div className={styles.orderDetails}>
                <OrderSummary
                    title={'June'}
                    subTitle="Total"
                    amount={total}
                    orders={orders}
                />
                <Confirmation
                    prompt="Is the order complete?"
                    cancel={handleCancel}
                    confirm={handleConfirm}
                />
            </div>
            <div className={styles.productDetails}>
                <ProductSpecification
                    options={options}
                    selected={selectedOption}
                    handleSelect={handleSelect}
                    handleAdd={handleAdd}
                />
                {children}
            </div>
        </>
    );
}
