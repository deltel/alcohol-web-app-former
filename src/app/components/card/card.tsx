import styles from './card.module.css';

export default function Card({
    dark = false,
    children,
    style = {},
    className = '',
    danger = false,
}: {
    dark?: boolean;
    children: React.ReactNode;
    style?: { [property: string]: any };
    className?: string;
    danger?: boolean;
}) {
    const styleOverride = danger
        ? {
              ...style,
              backgroundColor: 'var(--danger)',
              color: 'var(--light-text)',
          }
        : style;

    return (
        <div
            className={
                dark
                    ? `${styles.card} ${className}`
                    : `${styles.whiteBackground} ${className}`
            }
            style={styleOverride}
        >
            {children}
        </div>
    );
}
