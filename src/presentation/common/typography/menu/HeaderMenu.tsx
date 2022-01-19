import React, { useState } from 'react';
import { useRouter } from 'next/router';
import { Menu } from 'antd';

import { ICategory } from 'domain/interfaces/ICategory';
const { SubMenu } = Menu;

interface IMenu{
	source: Array<ICategory>,
	className?: string,
	mode: string
}

const HeaderMenu = ({ source, className } : IMenu) => {
	const [current, setCurrent] = useState(source[0].id);
	const Router = useRouter()

	const handleClick = async (e, slug) => {
		setCurrent(e.key)
		await Router.push({
				pathname: slug,
			}, undefined,
			{ shallow: false, scroll: false })
	};

	const renderMultiple = (category : ICategory) => {
		if(category.children.length != 0 )
			return(
				<SubMenu onTitleClick={e => handleClick(e, category.slug)} key={category.id} title={category.name}>
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
	return <Menu selectedKeys={[current]} mode={'horizontal'} className={className}>{menuView}</Menu>;
};

export default HeaderMenu;
