import React, { useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';

import {ICategory} from "domain/interfaces/ICategory";
import { stickyHeader } from 'helper/commons/header';
import { CONTACTS, HOME, PAYMENTS } from 'constant/routes';

import SearchHeader from 'presentation/common/layout/header/SearchHeader';
import ElectronicHeaderActions from 'presentation/common/layout/header/ElectronicHeaderActions';
import CustomMenu from "presentation/common/typography/menu/CustomMenu";

interface IHeader{
    categories: Array<ICategory>
}

const Header = ({categories} : IHeader) => {
    useEffect(() => {
        window.addEventListener('scroll', stickyHeader);
    }, []);

    return (
        <header
            className="header header--standard header--market-place-1"
            id="headerSticky">
            <div className="header__top">
                <div className="container">
                    <div className="header__left">
                        <p>Приветствуем в интернет-магазине CATS!</p>
                    </div>
                    <div className="header__right">
                        <ul className="header__top-links">
                            <li>
                                <Link href={CONTACTS}>
                                    <a>Контакты</a>
                                </Link>
                            </li>
                            {/*<li>*/}
                            {/*    <Link href={ABOUT_US}>*/}
                            {/*        <a>О нас</a>*/}
                            {/*    </Link>*/}
                            {/*</li>*/}
                            <li>
                                <Link href={PAYMENTS}>
                                    <a>Узнать статус заказа</a>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="header__content">
                <div className="container">
                    <div className="header__content-left">
                        <Link href={HOME}>
                            <a className="ps-logo mt-2">
                                <Image
                                    width={156}
                                    height={32}
                                    src="/static/img/logo.png"
                                    alt="martfury"
                                />
                            </a>
                        </Link>

                        <div className="menu--product-categories">
                            <div className="menu__toggle">
                                <i className='icon-menu'/>
                                <span> Категории</span>
                            </div>
                            <div className="menu__content">
                                <CustomMenu
                                    source={categories}
                                    mode={'vertical'}
                                    className="menu--dropdown"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="header__content-center">
                        <SearchHeader/>
                    </div>
                    <div className="header__content-right">
                        <ElectronicHeaderActions />
                    </div>
                </div>
            </div>
            <nav className="navigation">
                <div className="container">
                    <div className="navigation__left">
                        <div className="menu--product-categories">
                            <div className="menu__toggle">
                                <i className='icon-menu'/>
                                <span> Категории</span>
                            </div>
                            <div className="menu__content">
                                <CustomMenu
                                    source={categories}
                                    mode={'vertical'}
                                    className="menu--dropdown"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="navigation__right">
                        {categories.length >= 4 ? (
                            <CustomMenu
                                source={categories.slice(0, 4)}
                                mode={'horizontal'}
                            />
                        ) : (
                            <CustomMenu
                                source={categories}
                                mode={'horizontal'}
                            />
                        )}
                    </div>
                    <div className="ps-block--header-hotline inline">
                        <p>
                            <i className='icon-telephone'/>Телефон:
                            <strong> 88003355335</strong>
                        </p>
                    </div>
                </div>
            </nav>
        </header>
    );
};

export default Header;
