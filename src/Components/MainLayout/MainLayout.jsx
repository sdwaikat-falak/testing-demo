import {Outlet, useLocation} from "react-router";
import {Layout, Menu} from "antd";
import {useNavigate} from "react-router";
import {useState} from "react";


const MainLayout = () => {
    const navigate = useNavigate();
    const location = useLocation();
    return (
        <Layout>
            <Layout.Header style={{display: "flex", alignItems: "center"}} >
                <Menu
                    mode="horizontal"
                    theme="dark"
                    style={{flexGrow: 1}}
                    selectedKeys={location.pathname}
                >
                    <Menu.Item key="/" onClick={() => {
                        navigate("/");
                    }}>
                        Home
                    </Menu.Item>
                    <Menu.Item key="/aggridfull" onClick={() => {
                        navigate("/aggridfull");
                    }}>
                        AG Grid Full Feature
                    </Menu.Item>
                </Menu>
            </Layout.Header>
            <Layout.Content>
                <Outlet />
            </Layout.Content>
        </Layout>
    )

}

export default MainLayout;
