import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Menu } from 'antd';

import { generateShopUrl } from 'helper/commons/products';
import {ICategory} from "domain/interfaces/ICategory";
import productStore from 'data/stores/productStore';
import filterStore from 'data/stores/filtersStore';

const { SubMenu } = Menu;

interface IPanelCategories{
    categories: Array<ICategory>
}

const PanelCategories = ({ categories } : IPanelCategories) => {
    const [current, setCurrent] = useState(categories[0].id);
    const Router = useRouter()
    const { category, searchText } = Router.query

    useEffect(() => {
        if(category !== undefined)
            setCurrent(category.toString())
    }, [])

    const handleClick = async e => {
        setCurrent(e.key)
        productStore.setProductLoading(false)
        filterStore.setActiveFiltersFromUrl([])
        await Router.push({
                pathname: '/shop',
                query: generateShopUrl(e.key, undefined, searchText?.toString(), undefined, undefined, 1)
            }, undefined,
            { shallow: false, scroll: false })
    };

    const renderMultiple = (category : ICategory) => {
        if(category.children.length != 0 )
            return(
                <SubMenu onTitleClick={handleClick} key={category.id} title={category.name}>
                    {category.children?.map(itemDropDown => {
                        if(itemDropDown.children.length != 0)
                            return renderMultiple(itemDropDown)
                        else
                            return(
                                <Menu.Item key={itemDropDown.id}>
                                    <a>{itemDropDown.name}</a>
                                </Menu.Item>
                            )
                    })}
                </SubMenu>
            )
        else
            return(
                <Menu.Item key={category.id}>
                    <a>{category.name}</a>
                </Menu.Item>
            )
    }

    // Views
    let menuView;

    if (categories) {
        menuView = categories.map((item) => {
            return renderMultiple(item)
        });
    } else {
        menuView = (
            <Menu.Item>Здесь нет меню</Menu.Item>
        );
    }

    return (
        <Menu
            mode="inline"
            selectedKeys={[current]}
            className="menu--mobile-2"
            onClick={handleClick}>
            {menuView}
        </Menu>
    );
}

export default PanelCategories;
