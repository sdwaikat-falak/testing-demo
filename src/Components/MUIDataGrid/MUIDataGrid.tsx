import { useDemoData } from '@mui/x-data-grid-generator';
import { DataGrid } from '@mui/x-data-grid';
import {DataGridPremium} from "@mui/x-data-grid-premium";
import {Box} from "@mui/material";

export default function MUIDataGrid () {
    const {data} = useDemoData({
        dataSet: 'Commodity',
        rowLength: 10000,
        maxColumns: 6,
    });

    console.log(data);

    return (
        <Box>
            <DataGridPremium
                {...data}
                initialState={{
                    ...data.initialState,
                    pagination: { paginationModel: { pageSize: 10000 } },
                }}

            />
        </Box>
    )
}
