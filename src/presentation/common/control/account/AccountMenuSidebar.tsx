import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const AccountMenuSidebar = ({ data }) => (
    <aside className="ps-widget--account-dashboard">
        <div className="ps-widget__header">
            <Image width={60} height={60} src="/static/img/users/3.jpg" />
            <figure>
                <figcaption>Здравствуйте</figcaption>
                <p>ФИО</p>
            </figure>
        </div>
        <div className="ps-widget__content">
            <ul>
                {data.map(link => (
                    <li key={link.text} className={link.active ? 'active' : ''}>
                        <Link href={link.url}>
                            <a>
                                <i className={link.icon}/>
                                {link.text}
                            </a>
                        </Link>
                    </li>
                ))}
                <li>
                    <Link href="/account/my-account">
                        <a>Выйти</a>
                    </Link>
                </li>
            </ul>
        </div>
    </aside>
);

export default AccountMenuSidebar;
