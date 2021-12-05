import React from 'react';
import Link from 'next/link';

import { ICategory } from 'domain/interfaces/ICategory';
import { SHOP_PAGE } from 'constant/routes';
import MegaMenu from './MegaMenu';


interface IMenu{
    source: Array<ICategory>,
    className?: string
}

const Menu = ({ source, className } : IMenu) => {
    // Views
    let menuView;
    if (source) {
        menuView = source.map((item) => {
            if (item.children.length != 0) {
                return <MegaMenu key={item.id} source={item} />
            }
            else {
                return (
                    <li key={item.id}>
                        <Link href={SHOP_PAGE(undefined, undefined, item.id)}>
                            <a>{item.name}</a>
                        </Link>
                    </li>
                );
            }
        });
    } else {
        menuView = (
            <li>
                <a href="#" onClick={(e) => e.preventDefault()}>
                    Здесь нет менюшки
                </a>
            </li>
        );
    }
    return <ul className={className}>{menuView}</ul>;
};

export default Menu;
