import React from 'react';
import Link from 'next/link';

import { ICategory } from 'domain/interfaces/ICategory';
import { SHOP_PAGE } from "constant/routes";

interface IMegaMenu{
    source: ICategory
}

const MegaMenu = ({source} : IMegaMenu) => {
    let megaContentView;
    if (source) {
        megaContentView = (
            <div className="mega-menu__column">
                <h4>{source.name}</h4>
                <ul className="mega-menu__list">
                    {source.children?.map(item => (
                        <li key={item.id}>
                            <Link href={SHOP_PAGE(undefined, undefined, item.id)}>
                                <a>{item.name}</a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
        );
    }
    return (
        <li className="menu-item-has-children has-mega-menu">
            <Link href={SHOP_PAGE(undefined, undefined, source.id)}>
                <a>
                    {source.name}
                </a>
            </Link>
            <div className="mega-menu">{megaContentView}</div>
        </li>
    );
};

export default MegaMenu;
