'use client';

import { useState } from 'react';
import Card from '../card/card';
import Title from '../title/title';

import styles from './product-specification.module.css';
import Button from '../button/button';

export default function ProductSpecification({
    options,
    unitPrice,
}: {
    options: { label: string; value: string }[];
    unitPrice: number;
}) {
    const [quantity, setQuantity] = useState(1);

    return (
        <Card
            dark
            style={{ maxWidth: '18em', position: 'relative', padding: '2em' }}
        >
            <div className={styles.heading}>
                <Title title="Select Product" />
            </div>
            <div className={styles.content}>
                <select name="product" id="product">
                    {options.map(({ label, value }) => (
                        <option key={value} value={value}>
                            {label}
                        </option>
                    ))}
                </select>
                <div className={styles.cart}>
                    <div className={styles.quantity}>
                        <button
                            type="button"
                            onClick={() => setQuantity((prev) => prev - 1)}
                        >
                            -
                        </button>
                        <span>{quantity}</span>
                        <button
                            type="button"
                            onClick={() => setQuantity((prev) => prev + 1)}
                        >
                            +
                        </button>
                    </div>
                    <div className={styles.priceMultiplier}>
                        <span className={styles.sign}>x</span>
                        <span className={styles.price}>{unitPrice}</span>
                    </div>
                </div>
                <div className={styles.total}>
                    <span>Total</span>
                    <span>{unitPrice * quantity}</span>
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <Button label="Clear" />
                <Button label="Add" />
            </div>
        </Card>
    );
}
