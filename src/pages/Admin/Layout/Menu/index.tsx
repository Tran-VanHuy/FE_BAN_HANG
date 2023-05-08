import React, { useState } from 'react';
import { AppstoreOutlined, MailOutlined, SettingOutlined } from '@ant-design/icons';
import type { MenuProps } from 'antd';
import { Menu } from 'antd';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
    label: React.ReactNode,
    key: React.Key,
    icon?: React.ReactNode,
    children?: MenuItem[],
    type?: 'group',
): MenuItem {
    return {
        key,
        icon,
        children,
        label,
        type,
    } as MenuItem;
}

const items: MenuItem[] = [
    getItem('App config', 'sub1', <SettingOutlined />, [
        getItem('Banner', '1', <Link to ="/admin/banner"></Link>),
        getItem('Advertisement', '2',  <Link to ="/admin/banner"></Link>),
        getItem('Information', '3',  <Link to ="/admin/banner"></Link>),
    ]),
    getItem('Products', 'sub2', <AppstoreOutlined />, [
        getItem('Categories', '4',  <Link to ="/admin/category-products"></Link>),
        getItem('Infomation', '5',  <Link to ="/admin/products"></Link>),
    ]),
];

// submenu keys of first level
const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

const MenuAdmin: React.FC = () => {
    const [openKeys, setOpenKeys] = useState(['sub1']);

    const onOpenChange: MenuProps['onOpenChange'] = (keys) => {
        const latestOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
        if (rootSubmenuKeys.indexOf(latestOpenKey!) === -1) {
            setOpenKeys(keys);
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : []);
        }
    };

    return (
        <MenuContainer>
            <Menu
                mode="inline"
                openKeys={openKeys}
                onOpenChange={onOpenChange}
                style={{ width: 256 }}
                items={items}
            />
        </MenuContainer>

    );
};

export default MenuAdmin;

const MenuContainer = styled.div`
    
  
`