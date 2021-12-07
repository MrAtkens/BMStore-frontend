import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Menu } from 'antd';

import { ICategory } from 'domain/interfaces/ICategory';
import { SHOP_PAGE } from 'constant/routes';
const { SubMenu } = Menu;

interface IMenu{
    source: Array<ICategory>,
    className?: string,
    mode: string
}

const CustomMenu = ({ source, className, mode } : IMenu) => {
    const [current, setCurrent] = useState('f8959b59-bae3-4be6-98f9-2d3bfc1faed4');
    const Router = useRouter()
    const handleClick = e => {
        console.log('click ', e);
        setCurrent(e.key)
        Router.push(SHOP_PAGE(undefined, undefined, e.key))
    };

    const renderMultiple = (category : ICategory) => {
        if(category.children.length != 0 )
            return(
                <SubMenu key={category.id} title={category.name}>
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
    console.log(menuView)
    if(mode === 'horizontal')
        return <Menu onClick={handleClick} selectedKeys={[current]} mode={'horizontal'} className={className}>{menuView}</Menu>;
    else if(mode === 'vertical')
        return <Menu onClick={handleClick} selectedKeys={[current]} mode={'vertical'} className={className}>{menuView}</Menu>;
    return <Menu onClick={handleClick} selectedKeys={[current]} mode={'inline'} className={className}>{menuView}</Menu>;
};

export default CustomMenu;
