'use client';

import { MouseEventHandler } from 'react';

import styles from './confirmation.module.css';

import Button from '../button/button';
import Card from '../card/card';

export interface ConfirmationProps {
    prompt: string;
    cancel: MouseEventHandler<HTMLButtonElement>;
    confirm: MouseEventHandler<HTMLButtonElement>;
}

export default function Confirmation({
    prompt,
    cancel,
    confirm,
}: ConfirmationProps) {
    return (
        <Card
            dark
            style={{
                width: '100%',
            }}
        >
            <h3 className={styles.prompt}>{prompt}</h3>
            <div className={styles.buttonContainer}>
                <Button label="Cancel" handleClick={cancel} />
                <Button label="Confirm" handleClick={confirm} />
            </div>
        </Card>
    );
}
