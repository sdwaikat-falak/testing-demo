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

const AGMassData = () => {

    // Flatten grouped data for AG Grid
    const rowData = generateRandomData()

    // AG Grid Column Definitions
    return (
        <div className="ag-theme-alpine" style={{ height: 400 }}>
            <AgGridReact
                rowData={rowData}
                columnDefs={columns}
            />
        </div>
    );
};

export default AGMassData;
