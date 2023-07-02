export interface Product {
    productId: string;
    productName: string;
    stockLevel: number;
    totalValue: number;
    totalOrders: number;
    totalCost: number;
    totalRevenue: number;
    totalProfit: number;
}

export interface RestockProduct {
    productId: string;
    productName: string;
    quantity: number;
    unitPrice: number;
    totalPrice: number;
}

export interface Order {
    date: string;
    productName: string;
    quantity: number;
    cost: number;
    profit: number;
}

export interface OrderPreview {
    productName: string;
    quantity: number;
    revenue: number;
}

export interface CustomerOrder {
    dateOrdered: string;
    datePaid: string | null;
    productName: string;
    quantity: number;
    value: number;
    paid: boolean;
}

export interface Customer {
    customerId: string;
    customerName: string;
    balance: number;
    dueDate: string;
    totalOrders: number;
    totalRevenue: number;
}

export type CustomerPreview = Pick<
    Customer,
    'customerId' | 'customerName' | 'balance'
>;

export interface TableColumns {
    Header: string;
    columns: {
        Header: string;
        accessor: string;
    }[];
}

export type ProductPreview = Pick<
    Product,
    'productId' | 'productName' | 'stockLevel'
>;

export type ProductOrder = Pick<Order, 'productName' | 'quantity'>;

export interface OrderInfo {
    customerName: string;
    orderTotal: number;
    items: ProductOrder[];
}
