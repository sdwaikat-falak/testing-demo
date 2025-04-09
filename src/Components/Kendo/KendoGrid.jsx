import { Grid, GridColumn as Column } from '@progress/kendo-react-grid';
import {generateRandomData} from "../../utils.js";

const KendoGrid = () => {
    return (
        <Grid data={generateRandomData()}>
            <Column field="name" title="Name" />
            <Column field="age" title="Age" />
            <Column field="city.CategoryName" title="City" />
            <Column field="status" title="Status" />
            <Column field="department" title="Department" />
            <Column field="salary" title="Salary" />
        </Grid>
    )
}

export default KendoGrid;
