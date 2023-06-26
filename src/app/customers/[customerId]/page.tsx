import CustomerList from '@/app/components/list/customer/customer-list';
import CustomerDetails from '@/app/components/customer/customer-details/customer-detail';

import styles from './page.module.css';

export default function Customer({
    params,
}: {
    params: { customerId: string };
}) {
    return (
        <div className={styles.container}>
            <CustomerList />
            <CustomerDetails customerId={params.customerId} />
        </div>
    );
}
