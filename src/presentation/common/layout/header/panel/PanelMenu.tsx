import React, { useState } from 'react';

import { Menu } from 'antd';

import { menuLinks } from 'constant/menus/quickLinks';
import Link from 'next/link';

const PanelMenu = () => {
    const [current, setCurrent] = useState(menuLinks[0].text);
    const handleClick = async e => {
        setCurrent(e.key)
    };
    const linksView = menuLinks.map((item) => (
        <Menu.Item key={item.text}>
            <Link passHref href={item.url}>
                <a>{item.text}</a>
            </Link>
        </Menu.Item>
    ));

    return (
        <Menu
            mode="inline"
            selectedKeys={[current]}
            inlineIndent={4}
            onClick={handleClick}
            className="menu--mobile-2">
            {linksView}
        </Menu>
    );
}


export default PanelMenu;
