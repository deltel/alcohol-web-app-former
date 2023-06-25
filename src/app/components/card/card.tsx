import styles from './card.module.css';

export default function Card({
    dark = false,
    children,
    style = {},
    className = '',
}: {
    dark?: boolean;
    children: React.ReactNode;
    style?: { [property: string]: any };
    className?: string;
}) {
    return (
        <div
            className={
                dark
                    ? `${styles.card} ${className}`
                    : `${styles.whiteBackground} ${className}`
            }
            style={style}
        >
            {children}
        </div>
    );
}
