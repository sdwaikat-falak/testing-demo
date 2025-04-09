import React, { useState } from 'react';
import { Table } from 'antd';
import { Resizable } from 'react-resizable';
import 'antd/dist/reset.css'; // or 'antd/dist/antd.css' depending on version
import 'react-resizable/css/styles.css';

const ResizableTitle = (props: any) => {
    const { onResize, width, ...restProps } = props;

    if (!width) {
        return <th {...restProps} />;
    }

    return (
        <Resizable
            width={width}
            height={0}
            handle={
                <span
                    className="react-resizable-handle"
                    onClick={e => e.stopPropagation()}
                />
            }
            onResize={onResize}
            draggableOpts={{ enableUserSelectHack: false }}
        >
            <th {...restProps} />
        </Resizable>
    );
};

const ResizableTable = () => {
    const [columns, setColumns] = useState([
        {
            title: 'Name',
            dataIndex: 'name',
            width: 200,
        },
        {
            title: 'Age',
            dataIndex: 'age',
            width: 100,
        },
        {
            title: 'Address',
            dataIndex: 'address',
            width: 200,
        },
    ]);

    const data = [
        {
            key: '1',
            name: 'John Brown',
            age: 32,
            address: 'New York No. 1 Lake Park',
        },
        {
            key: '2',
            name: 'Jim Green',
            age: 42,
            address: 'London No. 1 Lake Park',
        },
    ];

    const handleResize =
        (index: number) =>
            (e: React.SyntheticEvent<Element>, { size }: { size: { width: number } }) => {
                const nextColumns = [...columns];
                nextColumns[index] = {
                    ...nextColumns[index],
                    width: size.width,
                };
                setColumns(nextColumns);
            };

    const mergedColumns = columns.map((col, index) => ({
        ...col,
        onHeaderCell: (column: any) => ({
            width: column.width,
            onResize: handleResize(index),
        }),
    }));

    return (
        <Table
            bordered
            components={{
                header: {
                    cell: ResizableTitle,
                },
            }}
            columns={mergedColumns}
            dataSource={data}
        />
    );
};

export default ResizableTable;
