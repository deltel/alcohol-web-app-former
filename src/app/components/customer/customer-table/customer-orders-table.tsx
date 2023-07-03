'use client';

import { useState } from 'react';
import styles from './customer-table.module.css';

import Button from '../../button/button';
import { CustomerOrder, TableColumns } from '../../product/contract';
import Table from '../../table/table';

export default function CustomerOrdersTable({
    columns,
    data,
}: {
    data: CustomerOrder[];
    columns: TableColumns[];
}) {
    const [label, setLabel] = useState('Credit');

    const handleTableChange = () => {
        setLabel((prev) => (prev === 'Credit' ? 'Orders' : 'Credit'));
    };

    return (
        <div className={styles.table}>
            <span className={styles.badge}>
                <Button
                    label={label}
                    danger={label === 'Credit'}
                    handleClick={handleTableChange}
                />
            </span>
            <Table columns={columns} data={data} />
        </div>
    );
}
