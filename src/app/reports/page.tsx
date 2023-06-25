import ReportDateFilter from '../components/filter/report-date-filter';
import ProductList from '../components/product/product-list/product-list';
import ReportCard from '../components/report/report-card';

import styles from './page.module.css';

export default function Reports() {
    return (
        <div className={styles.layout}>
            <ProductList />
            <div className={styles.reports}>
                <ReportCard />
                <ReportDateFilter />
            </div>
        </div>
    );
}
