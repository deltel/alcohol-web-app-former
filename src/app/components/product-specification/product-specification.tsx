'use client';

import { ChangeEventHandler, useState } from 'react';
import Card from '../card/card';
import Title from '../title/title';

import styles from './product-specification.module.css';
import Button from '../button/button';
import { OrderPreview } from '../product/contract';

export default function ProductSpecification({
    options,
    selected,
    handleSelect,
    handleAdd,
}: {
    options: { label: string; value: string; unitPrice: number }[];
    selected?: { label: string; value: string; unitPrice: number };
    handleSelect: ChangeEventHandler<HTMLSelectElement>;
    handleAdd: (cost: number, product: OrderPreview) => void;
}) {
    const [quantity, setQuantity] = useState(1);

    const total = selected?.unitPrice ? selected.unitPrice * quantity : 0;
    const productName = selected?.label ? selected.label : '';

    const handleClear = () => {
        setQuantity(1);
    };

    const handleDecrement = () => {
        setQuantity((prev) => (prev === 1 ? prev : prev - 1));
    };

    const handleIncrement = () => {
        setQuantity((prev) => prev + 1);
    };

    return (
        <Card
            dark
            style={{ maxWidth: '18em', position: 'relative', padding: '2em' }}
        >
            <div className={styles.heading}>
                <Title title="Select Product" />
            </div>
            <div className={styles.content}>
                <select
                    name="product"
                    id="product"
                    value={selected?.value}
                    placeholder="Select a product"
                    onChange={handleSelect}
                >
                    {options.map(({ label, value }) => (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    ))}
                </select>
                <div className={styles.cart}>
                    <div className={styles.quantity}>
                        <button type="button" onClick={handleDecrement}>
                            -
                        </button>
                        <span>{quantity}</span>
                        <button type="button" onClick={handleIncrement}>
                            +
                        </button>
                    </div>
                    <div className={styles.priceMultiplier}>
                        <span className={styles.sign}>x</span>
                        <span className={styles.price}>
                            {selected?.unitPrice ?? 0}
                        </span>
                    </div>
                </div>
                <div className={styles.total}>
                    <span>Total</span>
                    <span>{total}</span>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <Button label="Clear" handleClick={handleClear} />
                <Button
                    label="Add"
                    handleClick={() =>
                        handleAdd(total, {
                            productName,
                            quantity,
                            revenue: total,
                        })
                    }
                />
            </div>
        </Card>
    );
}
