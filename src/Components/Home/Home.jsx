import {Layout, List} from 'antd';
import {Container} from "@mui/material"
import {Link} from "react-router";
export default function () {
    return (
        <Container>
            <Layout style={{display: "flex", flexDirection: "row", height: "100%"}}>
                <Layout.Content>
                    <List>
                        <List.Item>
                            <List.Item.Meta
                                title={<Link to="/MUIGrid">Material UI Mass Data</Link>}
                                description="Material UI Grid 10k record without pagination"
                            />
                        </List.Item>
                    </List>
                    <List>
                        <List.Item>
                            <List.Item.Meta
                                title={<Link to="/kendoGrid">Kendo UI Mass Data</Link>}
                                description="Kendo UI Grid 10k record without pagination"
                            />
                        </List.Item>
                    </List>

                </Layout.Content>
                <Layout.Content>
                    <List>
                        <List.Item>
                            <List.Item.Meta
                                title={<Link to="/AntdMassData">Antd Mass Data</Link>}
                                description="Antd grid have mass data"
                            />
                        </List.Item>
                        <List.Item>
                            <List.Item.Meta
                                title={<Link to="/antd">Antd grid </Link>}
                                description="Grouping and Aggrigation"
                            />
                        </List.Item>
                        <List.Item>
                            <List.Item.Meta
                                title={<Link to={'/export'}>Antd export</Link>}
                                description="Antd exportable table"
                            />
                        </List.Item>
                        <List.Item>
                            <List.Item.Meta
                                title={<Link to={'/AntResizable'}>Ant Resizable Table</Link>}
                                description="Antd column resizable"
                            />
                        </List.Item>
                    </List>
                </Layout.Content>
                <Layout.Content>
                    <List>
                        <List.Item>
                            <List.Item.Meta
                                title={<Link to="/AGGrouping">AG Mass Data</Link>}
                                description="AG Grid 10k record without pagination"
                            />
                        </List.Item>
                    </List>

                </Layout.Content>
            </Layout>

        </Container>

    )
}
