import {Table, Typography} from 'antd';
import {useState} from "react";
import {generateRandomData} from "../../utils.js";

const { Text } = Typography;

const AntDMassData = () => {
    const data = generateRandomData();
    const columns = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            sorter: (a, b) => a.name.localeCompare(b.name),
        },
        {
            title: 'Age',
            dataIndex: 'age',
            key: 'age',
            sorter: (a, b) => a.age - b.age,
        },
        {
            title: 'City',
            dataIndex: 'city',
            key: 'city',
            onFilter: (value, record) => record.city === value,
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            onFilter: (value, record) => record.status === value,
        },
        {
            title: 'Department',
            dataIndex: 'department',
            key: 'department',
            onFilter: (value, record) => record.department === value,
        },
        {
            title: 'Salary',
            dataIndex: 'salary',
            key: 'salary',
            sorter: (a, b) => a.salary - b.salary,
            render: value => `$${value.toLocaleString()}`,
        },
    ];

    return (
        <Table
            columns={columns}
            dataSource={data}
            rowKey="key"
            pagination={{
                pageSize: 10000,
                showSizeChanger: true,
                pageSizeOptions: [10, 20, 50, 100],
            }}
        />
        )

}

export default AntDMassData;
