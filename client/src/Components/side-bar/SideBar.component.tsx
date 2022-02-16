import { Layout, Menu } from 'antd';
import React from 'react'
import { useStoreState } from '../../hooks/store/store.hooks';
import { sidebarData } from '../../data/sidebarData'
const { Sider } = Layout;
const { SubMenu } = Menu;
type Props = {}

export default function SideBar({ }: Props) {

    const { isSidebarOpen } = useStoreState(s => s.global)

    const renderMenu = (menues: Array<any>) => {
        return menues.map(itm => {
            return <Menu.Item key={itm.id}>{itm.name}</Menu.Item>
        })
    }

    return (
        <Sider className="site-layout-background" width={isSidebarOpen ? 200 : 0}>
            <Menu
                mode="inline"
                defaultSelectedKeys={["1"]}
                defaultOpenKeys={["sub1"]}
                style={{ height: "100%" }}>
                {
                    sidebarData?.map(_d => {
                        return <SubMenu key={_d.id} title={_d.name}>
                            {renderMenu(_d.subCategories)}
                        </SubMenu>
                    })
                }


            </Menu>
        </Sider>
    )
}