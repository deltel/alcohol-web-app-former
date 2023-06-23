import styles from './card.module.css';

export default function Card({
    dark = false,
    children,
    style = {},
}: {
    dark?: boolean;
    children: React.ReactNode;
    style?: { [property: string]: any };
}) {
    return (
        <div
            className={dark ? styles.card : styles.whiteBackground}
            style={style}
        >
            {children}
        </div>
    );
}
