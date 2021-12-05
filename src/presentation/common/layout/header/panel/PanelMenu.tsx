import React, { useState } from 'react';

import { Menu } from 'antd';
import Link from 'next/link';
import { menu } from 'constant/menus/menu';

const { SubMenu } = Menu;

const PanelMenu = () => {
    const [openKeys, setOpenKeys] = useState(['sub1'])

    const rootSubmenuKeys = ['sub1', 'sub2', 'sub4'];

    const onOpenChange = (openKeys : Array<string>) => {
        const latestOpenKey = openKeys.find(
            key => openKeys.indexOf(key) === -1
        );
        if (rootSubmenuKeys.indexOf(latestOpenKey as string) === -1) {
            setOpenKeys(openKeys)
        } else {
            setOpenKeys(latestOpenKey ? [latestOpenKey] : [])
        }
    };


    return (
        <Menu
            mode="inline"
            openKeys={openKeys}
            onOpenChange={onOpenChange}
            className="menu--mobile-2">
            {menu.menu_1.map((item) => {
                if (item.subMenu) {
                    return (
                        <SubMenu
                            key={item.text}
                            title={
                                <Link href={item.url}>
                                    <a>{item.text}</a>
                                </Link>
                            }>
                            {item.subMenu.map((subItem) => (
                                <Menu.Item key={subItem.text}>
                                    <Link href={subItem.url}>
                                        <a>{subItem.text}</a>
                                    </Link>
                                </Menu.Item>
                            ))}
                        </SubMenu>
                    );
                } else if (item.megaContent) {
                    return (
                        <SubMenu
                            key={item.text}
                            title={
                                <Link href={item.url}>
                                    <a>{item.text}</a>
                                </Link>
                            }>
                            {item.megaContent.map((megaItem) => (
                                <SubMenu
                                    key={megaItem.heading}
                                    title={<span>{megaItem.heading}</span>}>
                                    {megaItem.megaItems.map(
                                        (megaSubItem) => (
                                            <Menu.Item
                                                key={megaSubItem.text}>
                                                <Link href={item.url}>
                                                    <a>
                                                        {megaSubItem.text}
                                                    </a>
                                                </Link>
                                            </Menu.Item>
                                        )
                                    )}
                                </SubMenu>
                            ))}
                        </SubMenu>
                    );
                }
                return null
            })}
        </Menu>
    );
}


export default PanelMenu;
