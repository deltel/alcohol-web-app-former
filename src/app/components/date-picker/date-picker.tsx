'use client';

import { useState } from 'react';
import ReactDatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

export default function DatePicker({ id }: { id: string }) {
    const [startDate, setStartDate] = useState(new Date());
    return (
        <ReactDatePicker
            id={id}
            selected={startDate}
            onChange={(date) => setStartDate(date ?? new Date())}
        />
    );
}
