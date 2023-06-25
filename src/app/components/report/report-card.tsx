import Button from '../button/button';
import Card from '../card/card';
import Title from '../title/title';

import styles from './report-card.module.css';

export default function ReportCard() {
    return (
        <Card
            dark
            style={{
                display: 'flex',
                position: 'relative',
            }}
            className={styles.reportCard}
        >
            <div className={styles.title}>
                <Title title="Reports" />
            </div>
            <div className={styles.content}>
                <Button label="Report" />
                <Button label="Report" />
                <Button label="Report" />
                <Button label="Report" />
            </div>
        </Card>
    );
}
