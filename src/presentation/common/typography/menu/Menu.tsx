import React from 'react';
import Link from 'next/link';

import { ICategory } from 'domain/interfaces/ICategory';
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
            // if (item.isSub) {
            //     return <MegaMenu key={item.id} source={item} />
            // }
            // else {
            //     return (
            //         <li key={item.id}>
            //             <Link href={`/${item.slug}`}>
            //                 <a>{item.title}</a>
            //             </Link>
            //         </li>
            //     );
            // }
            return (
                <li key={item.slug}>
                    <Link href={`/${item.slug}`}>
                        <a>{item.name}</a>
                    </Link>
                </li>
            );
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
