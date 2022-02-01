import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import { Menu } from 'antd';

import { ICategory } from 'domain/interfaces/ICategory';
import { generateShopUrl } from 'helper/commons/products';
import filterStore from "data/stores/filtersStore"
import productStore from "data/stores/productStore"

const { SubMenu } = Menu;

interface IMenu{
    source: Array<ICategory>,
    className?: string,
    mode: string
}

const CategoryMenu = observer(({ source, className, mode } : IMenu) => {
    const [current, setCurrent] = useState("");
    const Router = useRouter()
    const { category, searchText } = Router.query

    useEffect(() => {
        if(category !== undefined)
            setCurrent(category.toString())
        else
            setCurrent("")
    }, [category])

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
                <SubMenu key={category.name} title={category.name}>
                    <Menu.Item key={category.id}>
                        Все {category.name}
                    </Menu.Item>
                    {category.children?.map(itemDropDown => {
                        if(itemDropDown.children.length != 0)
                            return renderMultiple(itemDropDown)
                        else
                            return(<Menu.Item key={itemDropDown.id}>
                                {itemDropDown.name}
                            </Menu.Item>)
                    })}
                </SubMenu>
            )
        else
            return(
                <Menu.Item key={category.id}>
                    {category.name}
                </Menu.Item>
            )
    }

    // Views
    let menuView;

    if (source) {
        menuView = source.map((item) => {
            return renderMultiple(item)
        });
    } else {
        menuView = (
            <Menu.Item>Здесь нет меню</Menu.Item>
        );
    }
    if(mode === 'horizontal')
        return <Menu onClick={handleClick} selectedKeys={[current]} mode={'horizontal'} className={className}>{menuView}</Menu>;
    else if(mode === 'vertical')
        return <Menu onClick={handleClick} selectedKeys={[current]} mode={'vertical'} className={className}>{menuView}</Menu>;
    else
        return <Menu onClick={handleClick} selectedKeys={[current]} mode={'inline'} className={className}>{menuView}</Menu>;
});

export default CategoryMenu;
