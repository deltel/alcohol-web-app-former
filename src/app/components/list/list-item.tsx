import Row from '../row/row';

import styles from './list-item.module.css';

export default function ListItem({
    label,
    figure,
}: {
    label: string;
    figure: number;
}) {
    return (
        <Row
            firstItem={label}
            secondItem={figure}
            textStyle={styles.padding}
            danger={label === 'John Doe'}
        />
    );
}
