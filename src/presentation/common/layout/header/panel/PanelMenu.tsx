import React, { useState } from 'react';

import { Menu } from 'antd';

import { accountLinks } from 'constant/menus/quickLinks';
import Link from 'next/link';

const PanelMenu = () => {
    const [current, setCurrent] = useState(accountLinks[0].text);
    const handleClick = async e => {
        setCurrent(e.key)
    };
    const linksView = accountLinks.map((item) => (
        <Menu.Item key={item.text}>
            <Link href={item.url}>
                <a href="#">{item.text}</a>
            </Link>
        </Menu.Item>
    ));

    return (
        <Menu
            mode="inline"
            selectedKeys={[current]}
            onClick={handleClick}
            className="menu--mobile-2">
            {linksView}
        </Menu>
    );
}


export default PanelMenu;
