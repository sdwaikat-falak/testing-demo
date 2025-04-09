import { Table, Button, Dropdown, Menu } from 'antd';
import { DownloadOutlined } from '@ant-design/icons';
import Papa from 'papaparse';
import { saveAs } from 'file-saver';
import JsPDF from 'jspdf';
import { autoTable } from 'jspdf-autotable'
import * as XLSX from 'xlsx';




const ExportMenu = ({ data, columns }) => {
    const exportToCSV = () => {
        // Prepare data (remove React-specific keys if needed)
        const exportData = data.map(({ key, ...rest }) => rest);

        // Generate CSV
        const csv = Papa.unparse(exportData, {
            quotes: true, // Add quotes around strings
            delimiter: ",", // Explicit comma delimiter
            header: true, // Include column headers
            newline: "\r\n" // Windows line endings for Excel compatibility
        });

        // Create and download file
        const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
        saveAs(blob, 'table_data.csv');
    };

    const exportToPDF = () => {
        const doc = new JsPDF();
        doc.text('Data Export', 14, 16);
        autoTable(doc, {
            head: [columns.map(col => col.title)],
            body: data.map(item => columns.map(col => item[col.dataIndex])),
            startY: 20
        });
        doc.save('data.pdf');
    };

    const exportToExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(data);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
        XLSX.writeFile(workbook, 'data.xlsx');
    };

    const menu = (
        <Menu>
            <Menu.Item key="csv" onClick={exportToCSV}>CSV</Menu.Item>
            <Menu.Item key="pdf" onClick={exportToPDF}>PDF</Menu.Item>
            <Menu.Item key="excel" onClick={exportToExcel}>Excel</Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu}>
            <Button icon={<DownloadOutlined />}>
                Export Data
            </Button>
        </Dropdown>
    );
};

// Usage in your table component
function ExportableTable() {
    const data = [
        { key: '1', name: 'John Brown', age: 32, address: 'New York' },
        { key: '2', name: 'Jim Green', age: 42, address: 'London' },
    ];

    const columns = [
        { title: 'Name', dataIndex: 'name', key: 'name' },
        { title: 'Age', dataIndex: 'age', key: 'age' },
        { title: 'Address', dataIndex: 'address', key: 'address' },
    ];
    return (
        <>
            <ExportMenu data={data} columns={columns} />
            <Table columns={columns} dataSource={data} />
        </>
    );
}

export default ExportableTable;
