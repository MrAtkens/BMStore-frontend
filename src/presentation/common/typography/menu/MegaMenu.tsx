import React from 'react';
import Link from 'next/link';

import { ICategory } from 'domain/interfaces/ICategory';
import {CATEGORY} from "constant/routes";

interface IMegaMenu{
    source: ICategory
}

const MegaMenu = ({source} : IMegaMenu) => {
    let megaContentView;
    if (source) {
        megaContentView = (
            <div className="mega-menu__column">
                <h4>{source.name}</h4>
                {/*<ul className="mega-menu__list">*/}
                {/*    {source.sub?.map(item => (*/}
                {/*        <li key={item.id}>*/}
                {/*            <Link href={`/${item.slug}`}>*/}
                {/*                <a>{item.title}</a>*/}
                {/*            </Link>*/}
                {/*        </li>*/}
                {/*    ))}*/}
                {/*</ul>*/}
            </div>
        );
    }
    return (
        <li className="menu-item-has-children has-mega-menu">
            <Link href={CATEGORY(source.slug)}>
                <a>
                    {source.name}
                </a>
            </Link>
            <div className="mega-menu">{megaContentView}</div>
        </li>
    );
};

export default MegaMenu;
