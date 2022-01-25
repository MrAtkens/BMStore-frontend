import React from 'react';
import Link from 'next/link';
import { observer } from 'mobx-react-lite';

import userStore from "data/stores/userStore"
import { accountLinks } from 'constant/menus/quickLinks';
import { LOGIN, REGISTER } from 'constant/routes';

const AccountQuickLinks = observer(() => {

    const handleLogout = async (e : any) => {
        e.preventDefault();
        await userStore.singOut();
    };

    // View
    const linksView = accountLinks.map((item) => (
        <li key={item.text}>
            <Link href={item.url}>
                <a>{item.text}</a>
            </Link>
        </li>
    ));

    if (userStore.isAuthenticated) {
        return (
            <div className="ps-block--user-account">
                <i className='icon-user'/>
                <div className="ps-block__content">
                    <ul className="ps-list--arrow">
                        {linksView}
                        <li className="ps-block__footer">
                            <a href="#" onClick={(e) => handleLogout(e)}>
                                Выйти
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        );
    } else {
        return (
            <div className="ps-block--user-header">
                <div className="ps-block__left">
                    <i className='icon-user'/>
                </div>
                <div className="ps-block__right">
                    <Link href={LOGIN}>
                        <a>Вход</a>
                    </Link>
                    <Link href={REGISTER}>
                        <a>Регистрация</a>
                    </Link>
                </div>
            </div>
        );
    }
})

export default AccountQuickLinks;
