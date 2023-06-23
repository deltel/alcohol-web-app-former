import {
    Product,
    ProductPreview,
    Order,
    TableColumns,
    OrderInfo,
} from '../components/product/contract';

const dummyData: ProductPreview[] = [
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
    return dummyData;
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
