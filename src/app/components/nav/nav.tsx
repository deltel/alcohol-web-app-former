import Link from 'next/link';
import styles from './nav.module.css';

export default function Nav() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li key="orders">
                    <Link href="/orders/one">Orders</Link>
                </li>
                <li key="restock">
                    <Link href="/restock/sorrel-rum">Restock</Link>
                </li>
                <li key="customers">
                    <Link href="/customers">Customers</Link>
                </li>
                <li key="reports">
                    <Link href="/reports">Reports</Link>
                </li>
            </ul>
        </nav>
    );
}
