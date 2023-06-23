import Button from '../button/button';
import Card from '../card/card';

import styles from './confirmation.module.css';

export default function Confirmation({ prompt }: { prompt: string }) {
    return (
        <Card
            dark
            style={{
                width: '100%',
            }}
        >
            <h3 className={styles.prompt}>{prompt}</h3>
            <div className={styles.buttonContainer}>
                <Button label="Cancel" />
                <Button label="Confirm" />
            </div>
        </Card>
    );
}
