import styles from './card.module.css';

export default function Card({
    dark = false,
    children,
}: {
    dark?: boolean;
    children: React.ReactNode;
}) {
    return (
        <div className={dark ? styles.card : styles.whiteBackground}>
            {children}
        </div>
    );
}
