import React, { useState } from 'react';
import { Menu } from 'antd';
import Link from 'next/link';

import { SHOP_PAGE } from 'constant/routes';
import {ICategory} from "domain/interfaces/ICategory";

interface IPanelCategories{
    categories: Array<ICategory>
}

const PanelCategories = ({ categories } : IPanelCategories) => {
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
            onOpenChange={onOpenChange}>
            {categories.map(category => (
                <Menu.Item key={category.slug}>
                    <Link href={SHOP_PAGE(undefined, undefined, category.slug)}>
                        {category.name}
                    </Link>
                </Menu.Item>
            ))}
        </Menu>
    );
}

export default PanelCategories;
