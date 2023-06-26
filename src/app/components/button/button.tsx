import styles from './button.module.css';

export default function Button({
    label,
    danger = false,
}: {
    label: string;
    danger?: boolean;
}) {
    return (
        <button
            className={
                danger ? `${styles.button} ${styles.danger}` : styles.button
            }
            type="button"
        >
            {label}
        </button>
    );
}
