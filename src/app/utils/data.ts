import {
    Product,
    ProductPreview,
    Order,
    TableColumns,
    OrderInfo,
    Customer,
} from '../components/product/contract';

const dummyProducts: ProductPreview[] = [
    { productId: 'sorrel-rum', productName: 'Sorrel Rum', stockLevel: 12 },
    { productId: 'sorrel-rum', productName: 'Sorrel Rum', stockLevel: 12 },
    { productId: 'sorrel-rum', productName: 'Sorrel Rum', stockLevel: 12 },
    { productId: 'sorrel-rum', productName: 'Sorrel Rum', stockLevel: 12 },
    { productId: 'sorrel-rum', productName: 'Sorrel Rum', stockLevel: 12 },
    { productId: 'sorrel-rum', productName: 'Sorrel Rum', stockLevel: 12 },
    { productId: 'sorrel-rum', productName: 'Sorrel Rum', stockLevel: 12 },
    { productId: 'sorrel-rum', productName: 'Sorrel Rum', stockLevel: 12 },
    { productId: 'sorrel-rum', productName: 'Sorrel Rum', stockLevel: 12 },
    { productId: 'sorrel-rum', productName: 'Sorrel Rum', stockLevel: 12 },
    { productId: 'sorrel-rum', productName: 'Sorrel Rum', stockLevel: 12 },
    { productId: 'sorrel-rum', productName: 'Sorrel Rum', stockLevel: 12 },
    { productId: 'sorrel-rum', productName: 'Sorrel Rum', stockLevel: 12 },
    { productId: 'sorrel-rum', productName: 'Sorrel Rum', stockLevel: 12 },
    { productId: 'sorrel-rum', productName: 'Sorrel Rum', stockLevel: 12 },
    { productId: 'sorrel-rum', productName: 'Sorrel Rum', stockLevel: 12 },
    { productId: 'sorrel-rum', productName: 'Sorrel Rum', stockLevel: 12 },
    { productId: 'sorrel-rum', productName: 'Sorrel Rum', stockLevel: 12 },
    { productId: 'sorrel-rum', productName: 'Sorrel Rum', stockLevel: 12 },
    { productId: 'sorrel-rum', productName: 'Sorrel Rum', stockLevel: 12 },
];

export function getProductList() {
    console.count('fetching product list');
    return dummyProducts;
}

const dummyCustomers: Customer[] = [
    { customerId: 'John Doe', customerName: 'John Doe', balance: 12000 },
    { customerId: 'Jane Doe', customerName: 'Jane Doe', balance: 0 },
    { customerId: 'John Doe', customerName: 'John Doe', balance: 12000 },
    { customerId: 'John Doe', customerName: 'John Doe', balance: 12000 },
    { customerId: 'John Doe', customerName: 'John Doe', balance: 12000 },
    { customerId: 'John Doe', customerName: 'John Doe', balance: 12000 },
    { customerId: 'John Doe', customerName: 'John Doe', balance: 12000 },
    { customerId: 'John Doe', customerName: 'John Doe', balance: 12000 },
    { customerId: 'John Doe', customerName: 'John Doe', balance: 12000 },
    { customerId: 'John Doe', customerName: 'John Doe', balance: 12000 },
    { customerId: 'John Doe', customerName: 'John Doe', balance: 12000 },
    { customerId: 'John Doe', customerName: 'John Doe', balance: 12000 },
    { customerId: 'John Doe', customerName: 'John Doe', balance: 12000 },
    { customerId: 'John Doe', customerName: 'John Doe', balance: 12000 },
    { customerId: 'John Doe', customerName: 'John Doe', balance: 12000 },
    { customerId: 'John Doe', customerName: 'John Doe', balance: 12000 },
    { customerId: 'John Doe', customerName: 'John Doe', balance: 12000 },
    { customerId: 'John Doe', customerName: 'John Doe', balance: 12000 },
    { customerId: 'John Doe', customerName: 'John Doe', balance: 12000 },
    { customerId: 'John Doe', customerName: 'John Doe', balance: 12000 },
];

export function getCustomerList() {
    console.count('fetching customer list');
    return dummyCustomers;
}

const productInfo: Product = {
    productId: 'sorrel-rum',
    productName: 'Sorrel Rum',
    stockLevel: 12,
    totalCost: 30000,
    totalOrders: 6,
    totalProfit: 40000,
    totalRevenue: 40000,
    totalValue: 80000,
};

export const getProduct = (productId: string) => productInfo;

export function getOrderHistory(productId: string) {
    const columns: TableColumns[] = [
        {
            Header: 'Order History',
            columns: [
                {
                    Header: 'Date',
                    accessor: 'date',
                },
                {
                    Header: 'Product Name',
                    accessor: 'productName',
                },
                {
                    Header: 'Quantity',
                    accessor: 'quantity',
                },
                {
                    Header: 'Cost',
                    accessor: 'cost',
                },
                {
                    Header: 'Profit',
                    accessor: 'profit',
                },
            ],
        },
    ];
    const data: Order[] = [
        {
            date: 'June',
            productName: 'Sorrel Rum',
            quantity: 6,
            cost: 1200,
            profit: 200,
        },
    ];

    return {
        columns,
        data,
    };
}

export function getOrdersList(orderId: string) {
    return [
        {
            productName: 'Sorrel Rum',
            quantity: 12,
            revenue: 12000,
        },
        {
            productName: 'Sorrel Rum',
            quantity: 12,
            revenue: 12000,
        },
        {
            productName: 'Sorrel Rum',
            quantity: 12,
            revenue: 12000,
        },
        {
            productName: 'Sorrel Rum',
            quantity: 12,
            revenue: 12000,
        },
    ];
}

export const getOrderSummary = (orderId: string) => ({
    expectedRevenue: 48000,
    title: 'June',
});

const orderData: OrderInfo[] = [
    {
        customerName: 'Jane Doe',
        orderTotal: 5000,
        items: [
            {
                quantity: 3,
                productName: 'Yellow Tail',
            },
            {
                quantity: 5,
                productName: 'Sorrel Rum',
            },
            {
                quantity: 2,
                productName: 'Red Label',
            },
        ],
    },
    {
        customerName: 'Jane Doe',
        orderTotal: 5000,
        items: [
            {
                quantity: 3,
                productName: 'Yellow Tail',
            },
            {
                quantity: 5,
                productName: 'Sorrel Rum',
            },
            {
                quantity: 2,
                productName: 'Red Label',
            },
        ],
    },
    {
        customerName: 'Jane Doe',
        orderTotal: 5000,
        items: [
            {
                quantity: 3,
                productName: 'Yellow Tail',
            },
            {
                quantity: 5,
                productName: 'Sorrel Rum',
            },
            {
                quantity: 2,
                productName: 'Red Label',
            },
        ],
    },
    {
        customerName: 'Jane Doe',
        orderTotal: 5000,
        items: [
            {
                quantity: 3,
                productName: 'Yellow Tail',
            },
            {
                quantity: 5,
                productName: 'Sorrel Rum',
            },
            {
                quantity: 2,
                productName: 'Red Label',
            },
        ],
    },
];

export const getOrderDetails = (orderId: string) => orderData;

const recentPurchases = [
    {
        date: '21 Jul 2023',
        source: 'Supply Store',
        quantity: 12,
        totalCost: 12000,
    },
    {
        date: '21 Jul 2023',
        source: 'Supply Store',
        quantity: 12,
        totalCost: 12000,
    },
    {
        date: '21 Jul 2023',
        source: 'Supply Store',
        quantity: 12,
        totalCost: 12000,
    },
    {
        date: '21 Jul 2023',
        source: 'Supply Store',
        quantity: 12,
        totalCost: 12000,
    },
    {
        date: '21 Jul 2023',
        source: 'Supply Store',
        quantity: 12,
        totalCost: 12000,
    },
    {
        date: '21 Jul 2023',
        source: 'Supply Store',
        quantity: 12,
        totalCost: 12000,
    },
    {
        date: '21 Jul 2023',
        source: 'Supply Store',
        quantity: 12,
        totalCost: 12000,
    },
];

export const getRecentPurchases = (productId: string) => ({
    recentPurchases,
    productName: 'Sorrel Rum',
});
