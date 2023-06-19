import {
    Product,
    ProductPreview,
    Order,
    TableColumns,
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
