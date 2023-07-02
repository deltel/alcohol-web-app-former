'use client';

import { MouseEventHandler } from 'react';

import styles from './button.module.css';

export default function Button({
    label,
    handleClick,
    danger = false,
}: {
    label: string;
    danger?: boolean;
    handleClick: MouseEventHandler<HTMLButtonElement>;
}) {
    return (
        <button
            className={
                danger ? `${styles.button} ${styles.danger}` : styles.button
            }
            type="button"
            onClick={handleClick}
        >
            {label}
        </button>
    );
}
