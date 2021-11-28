import React  from 'react';
import Link from 'next/link';
import { Dropdown, Menu } from 'antd';
import { observer } from 'mobx-react-lite';

import userStore from "data/stores/userStore"
import { accountLinks } from 'constant/menus/quickLinks';

const AccountQuickLinks  = observer(() => {

    const handleLogout = (e: any) => {
        e.preventDefault();
        userStore.singOut()
    };

    const menu = (
        <Menu>
            {accountLinks.map(link => (
                <Menu.Item key={link.url}>
                    <Link href={link.url}>
                        <a>{link.text}</a>
                    </Link>
                </Menu.Item>
            ))}

            <Menu.Item>
                <a href="#" onClick={handleLogout}>
                    Выйти
                </a>
            </Menu.Item>
        </Menu>
    );

    return (
        <Dropdown overlay={menu} placement="bottomLeft">
            <a href="#" className="header__extra ps-user--mobile">
                <i className='icon-user'/>
            </a>
        </Dropdown>
    );
})

export default AccountQuickLinks;
