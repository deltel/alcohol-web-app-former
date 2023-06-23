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

export interface Order {
    date: string;
    productName: string;
    quantity: number;
    cost: number;
    profit: number;
}

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
