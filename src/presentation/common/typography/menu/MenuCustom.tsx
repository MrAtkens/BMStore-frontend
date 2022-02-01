import React, { useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import { Menu } from 'antd';

import { IMenu } from 'domain/interfaces/IMenu';
import filterStore from "data/stores/filtersStore"
import productStore from "data/stores/productStore"


interface IMenuCustom{
    source: Array<IMenu>,
    className?: string,
    mode: string
}

const MenuCustom = observer(({ source, className, mode } : IMenuCustom) => {
    const [current, setCurrent] = useState("");
    const Router = useRouter()

    const handleClick = async (e, url) => {
        setCurrent(e.key)
        productStore.setProductLoading(false)
        filterStore.setActiveFiltersFromUrl([])
        await Router.push(url)
    };

    const render = (menu : IMenu) => {
        return(
            <Menu.Item onClick={e => handleClick(e, menu.url)} key={menu.text}>
                {menu.text}
            </Menu.Item>
        )
    }

    // Views
    let menuView;

    if (source) {
        menuView = source.map((item) => {
            return render(item)
        });
    } else {
        menuView = (
            <Menu.Item>Здесь нет меню</Menu.Item>
        );
    }
    if(mode === 'horizontal')
        return <Menu selectedKeys={[current]} mode={'horizontal'} className={className}>{menuView}</Menu>;
    else if(mode === 'vertical')
        return <Menu selectedKeys={[current]} mode={'vertical'} className={className}>{menuView}</Menu>;
    else
        return <Menu selectedKeys={[current]} mode={'inline'} className={className}>{menuView}</Menu>;
});

export default MenuCustom;
