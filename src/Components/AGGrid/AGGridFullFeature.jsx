import { AgGridReact } from 'ag-grid-react';
import {
    ModuleRegistry,
    AllCommunityModule, // or AllEnterpriseModule
} from 'ag-grid-community';
import React from 'react';
import {generateRandomData} from "../../utils.js";

ModuleRegistry.registerModules([
    AllCommunityModule, // or AllEnterpriseModule
]);



const columns = [
    {
        headerName: 'Name',
        field: 'name',
    },
    {
        headerName: 'Age',
        field: 'age',
    },
    {
        headerName: 'City',
        field: 'city',
    },
    {
        headerName: 'Status',
        field: 'status',
    },
    {
        headerName: 'Department',
        field: 'department',
    },
    {
        headerName: 'Salary',
        field: 'salary',
    },
];

const AGGridFullFeature = () => {

    // Flatten grouped data for AG Grid
    const rowData = generateRandomData(1000)

    // AG Grid Column Definitions
    return (
        <div className="ag-theme-alpine" style={{ height: "100vh" }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columns}
            />
        </div>
    );
};

export default AGGridFullFeature;
