import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Drawer } from 'antd';

import {ICategory} from "domain/interfaces/ICategory";
import cartStore from 'data/stores/cartStore';
import PanelCartMobile from '../panel/PanelCartMobile';
import PanelCategories from '../panel/PanelCategories';
import PanelSearch from '../panel/PanelSearch';
import PanelMenu from '../panel/PanelMenu';
import { useRouter } from 'next/router';

interface INavigationList{
    categories: Array<ICategory>
}

const NavigationList = observer(({categories} : INavigationList) => {
    const Router = useRouter();
    const [menuDrawer, setMenuDrawer] = useState(false);
    const [searchDrawer, setSearchDrawer] = useState(false);
    const [categoriesDrawer, setCategoriesDrawer] = useState(false);

    useEffect(() => {
        console.log(Router.asPath)
        setMenuDrawer(false)
        cartStore.setIsMobileCartOpen(false)
        setSearchDrawer(false)
        setCategoriesDrawer(false)
    },[Router.asPath])

    const handleDrawerClose = () => {
        setMenuDrawer(false)
        cartStore.setIsMobileCartOpen(false)
        setSearchDrawer(false)
        setCategoriesDrawer(false)
    };

    const handleShowMenuDrawer = () => {
        setMenuDrawer(!menuDrawer)
        cartStore.setIsMobileCartOpen(false)
        setSearchDrawer(false)
        setCategoriesDrawer(false)
    };

    const handleShowCartDrawer = () => {
        setMenuDrawer(false)
        cartStore.setIsMobileCartOpen(!cartStore.isMobileCartOpen)
        setSearchDrawer(false)
        setCategoriesDrawer(false)
    };
    const handleShowSearchDrawer = () => {
        setMenuDrawer(false)
        cartStore.setIsMobileCartOpen(false)
        setSearchDrawer(!searchDrawer)
        setCategoriesDrawer(false)
    };

    const handleShowCategoriesDrawer = () => {
        setMenuDrawer(false)
        cartStore.setIsMobileCartOpen(false)
        setSearchDrawer(false)
        setCategoriesDrawer(!categoriesDrawer)
    };

    return (
        <div className="navigation--list">
            <Drawer
                className="ps-panel--mobile"
                placement="right"
                closable={false}
                onClose={handleDrawerClose}
                visible={menuDrawer}>
                <div className="ps-panel--wrapper">
                    <div className="ps-panel__header">
                        <h3>Меню</h3>
                        <span
                            className="ps-panel__close"
                            onClick={handleDrawerClose}>
                                <i className='icon-cross'/>
                            </span>
                    </div>
                    <div className="ps-panel__content">
                        <PanelMenu />
                    </div>
                </div>
            </Drawer>
            <Drawer
                className="ps-panel--mobile"
                placement="right"
                closable={false}
                onClose={handleDrawerClose}
                visible={cartStore.isMobileCartOpen}>
                <div className="ps-panel--wrapper">
                    <div className="ps-panel__header">
                        <h3>Корзина</h3>
                        <span
                            className="ps-panel__close"
                            onClick={handleDrawerClose}>
                                <i className='icon-cross'/>
                            </span>
                    </div>
                    <div className="ps-panel__content">
                        <PanelCartMobile />
                    </div>
                </div>
            </Drawer>
            <Drawer
                className="ps-panel--mobile"
                placement="right"
                closable={false}
                onClose={handleDrawerClose}
                visible={searchDrawer}>
                <div className="ps-panel--wrapper">
                    <div className="ps-panel__header">
                        <h3>Поиск</h3>
                        <span
                            className="ps-panel__close"
                            onClick={handleDrawerClose}>
                                <i className='icon-cross'/>
                            </span>
                    </div>
                    <div className="ps-panel__content">
                        <PanelSearch />
                    </div>
                </div>
            </Drawer>
            <Drawer
                className="ps-panel--mobile"
                placement="right"
                closable={false}
                onClose={handleDrawerClose}
                visible={categoriesDrawer}>
                <div className="ps-panel--wrapper">
                    <div className="ps-panel__header">
                        <h3>Категории</h3>
                        <span
                            className="ps-panel__close"
                            onClick={handleDrawerClose}>
                                <i className='icon-cross'/>
                            </span>
                    </div>
                    <div className="ps-panel__content">
                        <PanelCategories categories={categories} />
                    </div>
                </div>
            </Drawer>
            <div className="navigation__content">
                <a
                    href="#"
                    className={`navigation__item ${
                        menuDrawer ? 'active' : ''
                    }`}
                    onClick={handleShowMenuDrawer}>
                    <i className='icon-menu'/>
                    <span> Меню</span>
                </a>
                <a
                    href="#"
                    className={`navigation__item ${
                        categoriesDrawer ? 'active' : ''
                    }`}
                    onClick={handleShowCategoriesDrawer}>
                    <i className='icon-list4'/>
                    <span> Категории</span>
                </a>
                <a
                    href="#"
                    className={`navigation__item ${
                        searchDrawer ? 'active' : ''
                    }`}
                    onClick={handleShowSearchDrawer}>
                    <i className='icon-magnifier'/>
                    <span> Поиск</span>
                </a>
                <a
                    href="#"
                    className={`navigation__item ${
                        cartStore.isMobileCartOpen ? 'active' : ''
                    }`}
                    onClick={handleShowCartDrawer}>
                    <i className='icon-bag2'/>
                    <span> Корзина</span>
                </a>
            </div>
        </div>
    );
})

export default NavigationList;
