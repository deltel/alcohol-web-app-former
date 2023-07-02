'use client';

import { createContext, useState } from 'react';
import { getOrdersList } from '../utils/data';
import { OrderPreview } from '../components/product/contract';

export const ProductContext = createContext<{
    productName: string;
    total: number;
    orders: OrderPreview[];
    handleAdd: (cost: number, product: OrderPreview) => void;
    handleCancel: () => void;
    handleConfirm: () => void;
    handleProductChange: (productName: string) => void;
}>({
    productName: '',
    total: 0,
    orders: [],
    handleAdd: () => {},
    handleCancel: () => {},
    handleConfirm: () => {},
    handleProductChange: () => {},
});

const initialOrders = getOrdersList('');

export default function ProductProvider({
    children,
}: {
    children: React.ReactNode;
}) {
    const [productName, setProductName] = useState('sorrel-rum');
    const [total, setTotal] = useState(48000);
    const [orders, setOrders] = useState(initialOrders);

    const handleProductChange = (productName: string) => {
        setProductName(productName);
    };

    const handleAdd = (cost: number, product: OrderPreview) => {
        console.log('Adding item');
        setTotal((prev) => prev + cost);
        setOrders((prev) => [...prev, product]);
        console.log('Successfully added item');
    };

    const handleCancel = () => {
        setOrders([]);
        setTotal(0);
    };

    const handleConfirm = () => {
        setOrders([]);
        setTotal(0);
        console.log(`confirm order ${productName}`, orders, total);
    };

    return (
        <ProductContext.Provider
            value={{
                productName,
                total,
                orders,
                handleAdd,
                handleCancel,
                handleConfirm,
                handleProductChange,
            }}
        >
            {children}
        </ProductContext.Provider>
    );
}
