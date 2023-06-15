import Link from 'next/link';
import styles from './nav.module.css';

export default function Nav() {
    return (
        <nav className={styles.navbar}>
            <ul>
                <li>
                    <Link href="/orders">Orders</Link>
                </li>
                <li>
                    <Link href="/restock">Restock</Link>
                </li>
                <li>
                    <Link href="/customers">Customers</Link>
                </li>
                <li>
                    <Link href="/reports">Reports</Link>
                </li>
            </ul>
        </nav>
    );
}
