import styles from './button.module.css';

export default function Button({ label }: { label: string }) {
    return (
        <button className={styles.button} type="button">
            {label}
        </button>
    );
}
