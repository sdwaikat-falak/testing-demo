import {createBrowserRouter} from "react-router";
import MUIDataGrid from "../Components/MUIDataGrid/MUIDataGrid.tsx";
import AntDGrid from "../Components/AntDGrid/AntDGrid.tsx";
import ExportableTable from "../Components/AntDGrid/ExportableTable.jsx";
import GridWithGrouping from "../Components/AGGrid/GridWithGrouping.jsx";
import AGGridFullFeature from "../Components/AGGrid/AGGridFullFeature.jsx";
import MainLayout from "../Components/MainLayout/MainLayout.jsx";
import Home from '../Components/Home/Home.jsx';
import AntDMassData from "../Components/AntDGrid/AntDMassData.jsx";
import ResizableTable from "../Components/AntDGrid/ResizableTable.tsx";
import KendoGrid from '../Components/Kendo/KendoGrid.jsx';

export const routes = createBrowserRouter(
    [
        {
            path: '/',
            element: <MainLayout />,
            children: [
                {
                  index: true,
                  element: <Home />
                },
                {
                    path: 'MUIGrid',
                    element:
                            <MUIDataGrid />
                },
                {
                    path: 'antd',
                    element:
                            <AntDGrid />
                },
                {
                    path: 'export',
                    element: <ExportableTable />
                },
                {
                    path: 'AGGrouping',
                    element: <GridWithGrouping />
                },
                {
                    path: 'AntdMassData',
                    element: <AntDMassData />
                },
                {
                    path: 'AntResizable',
                    element: <ResizableTable />
                },
                {
                    path: 'kendoGrid',
                    element: <KendoGrid />
                },
                {
                    path: 'aggridfull',
                    element: <AGGridFullFeature />
                }
            ]


        },

    ]
)
