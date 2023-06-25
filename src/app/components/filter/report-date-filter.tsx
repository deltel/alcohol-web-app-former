import Button from '../button/button';
import Card from '../card/card';
import DatePicker from '../date-picker/date-picker';
import Title from '../title/title';

import styles from './report-date-filter.module.css';

export default function ReportDateFilter() {
    return (
        <Card
            dark
            style={{
                display: 'flex',
                position: 'relative',
                width: '70%',
            }}
        >
            <div className={styles.title}>
                <Title title="Report" />
            </div>
            <div className={styles.content}>
                <div className={styles.date}>
                    <label htmlFor="start-date">Start Date</label>
                    <DatePicker id="start-date" />
                </div>
                <div className={styles.date}>
                    <label htmlFor="end-date">End Date</label>
                    <DatePicker id="end-date" />
                </div>
            </div>
            <div className={styles.buttonContainer}>
                <Button label="Cancel" />
                <Button label="Confirm" />
            </div>
        </Card>
    );
}
