import Link from 'next/link';
import styles from './nav.module.css';

export default function Nav() {
    return (
        <nav className={styles.navbar}>
            <Link href="/orders">Orders</Link>
            <Link href="/restock">Restock</Link>
            <Link href="/customers">Customers</Link>
            <Link href="/reports">Reports</Link>
        </nav>
    );
}
