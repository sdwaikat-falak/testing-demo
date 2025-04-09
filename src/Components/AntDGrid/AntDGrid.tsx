import {Table, Typography} from 'antd';
import {useState} from "react";

const { Text } = Typography;

const AntDGrid = () => {



    const [expandedRowKeys, setExpandedRowKeys] = useState(['group1', 'group2']);

    const data = [
        {
            key: 'group1',
            name: 'Electronics',
            type: 'category',
            children: [
                { key: 'item1', name: 'Laptop', price: 1200, quantity: 5, type: 'item' },
                { key: 'item2', name: 'Phone', price: 800, quantity: 10, type: 'item' },
            ],
        },
        {
            key: 'group2',
            name: 'Furniture',
            type: 'category',
            children: [
                { key: 'item3', name: 'Chair', price: 150, quantity: 20, type: 'item' },
                { key: 'item4', name: 'Desk', price: 300, quantity: 8, type: 'item' },
            ],
        },
    ];

    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            render: (text, record) => (
                <Text strong={record.type === 'category'}>{text}</Text>
            ),
        },
        {
            title: 'Price',
            dataIndex: 'price',
            key: 'price',
            render: (text, record) => (
                record.type === 'category' ? (
                    <Text strong>{record.children.reduce((sum, item) => sum + item.price, 0)}</Text>
                ) : text
            ),
        },
        {
            title: 'Quantity',
            dataIndex: 'quantity',
            key: 'quantity',
            render: (text, record) => (
                record.type === 'category' ? (
                    <Text strong>{record.children.reduce((sum, item) => sum + item.quantity, 0)}</Text>
                ) : text
            ),
        },
        {
            title: 'Total Value',
            key: 'total',
            render: (_, record) => (
                record.type === 'category' ? (
                    <Text strong>
                        {record.children.reduce((sum, item) => sum + (item.price * item.quantity), 0)}
                    </Text>
                ) : (
                    record.price * record.quantity
                )
            ),
        },
    ];
    return (
        <Table
            columns={columns}
            dataSource={data}
            rowKey="key"
            expandable={{
                expandedRowKeys,
                onExpand: (expanded, record) => {
                    setExpandedRowKeys(
                        expanded
                            ? [...expandedRowKeys, record.key]
                            : expandedRowKeys.filter(key => key !== record.key)
                    );
                },
                rowExpandable: record => record.type === 'category',
            }}
            summary={() => {
                const totals = data.reduce((acc, group) => {
                    if (group.type === 'category') {
                        acc.totalPrice += group.children.reduce((sum, item) => sum + item.price, 0);
                        acc.totalQuantity += group.children.reduce((sum, item) => sum + item.quantity, 0);
                        acc.totalValue += group.children.reduce((sum, item) => sum + (item.price * item.quantity), 0);
                    }
                    return acc;
                }, { totalPrice: 0, totalQuantity: 0, totalValue: 0 });

                return (
                    <Table.Summary fixed>
                        <Table.Summary.Row>
                            <Table.Summary.Cell index={0}>
                                <Text strong>Grand Total</Text>
                            </Table.Summary.Cell>
                            <Table.Summary.Cell index={1}>
                                <Text strong>{totals.totalPrice}</Text>
                            </Table.Summary.Cell>
                            <Table.Summary.Cell index={2}>
                                <Text strong>{totals.totalQuantity}</Text>
                            </Table.Summary.Cell>
                            <Table.Summary.Cell index={3}>
                                <Text strong>{totals.totalValue}</Text>
                            </Table.Summary.Cell>
                        </Table.Summary.Row>
                    </Table.Summary>
                );
            }}
        />
    );
};


export default AntDGrid;
