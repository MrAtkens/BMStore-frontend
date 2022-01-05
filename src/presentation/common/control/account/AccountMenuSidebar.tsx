import React from 'react';
import Link from 'next/link';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router'

import { HOME } from 'constant/routes';
import userStore from 'data/stores/userStore'

interface IAccountLinks{
    text: string,
    url: string,
    icon: string
}

interface IAccountMenuSidebar{
    data: Array<IAccountLinks>
}

const AccountMenuSidebar = observer(({ data } : IAccountMenuSidebar) => {
    const Router = useRouter()

    const onLogOut = () => {
        userStore.singOut().then(() => {
            Router.push(HOME)
        })
    }

    return (
        <aside className="ps-widget--account-dashboard">
            <div className="ps-widget__header">
                <figure>
                    <figcaption>Здравствуйте</figcaption>
                    <p>{userStore.user.fullName} | {userStore.user.email}</p>
                </figure>
            </div>
            <div className="ps-widget__content">
                <ul>
                    {data.map(link => (
                        <li key={link.text} className={link.url === Router.pathname ? 'active' : ''}>
                            <Link href={link.url}>
                                <a>
                                    <i className={link.icon}/>
                                    {link.text}
                                </a>
                            </Link>
                        </li>
                    ))}
                    <li onClick={onLogOut}>
                        <a href="#">Выйти</a>
                    </li>
                </ul>
            </div>
        </aside>
    )
});

export default AccountMenuSidebar;
