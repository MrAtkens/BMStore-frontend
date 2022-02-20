import React, { useEffect } from 'react';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import { Tag } from 'antd';

import { ICategory } from 'domain/interfaces/ICategory';

import categoryStore from 'data/stores/categoryStore';
import productStore from 'data/stores/productStore';
import filterStore from 'data/stores/filtersStore';
import { generateShopUrl } from 'helper/commons/products';
import { getDeepCategory } from 'helper/find';

interface ICategoryMobile {
	categories: Array<ICategory>;
}

const CategoryMenuMobile = observer(({ categories }: ICategoryMobile) => {
	const Router = useRouter();
	const { category, searchText } = Router.query;

	useEffect(() => {
		if (category === undefined) categoryStore.setActiveDefault();
		else {
			console.log(category);
			let activeCategory = getDeepCategory(categories, category);
			console.log(activeCategory);
			if (activeCategory !== undefined)
				categoryStore.setActive(activeCategory);
			else categoryStore.setActiveDefault();
		}
	}, []);

	useEffect(() => {
		if (category === undefined) categoryStore.setActiveDefault();
		else {
			console.log(category);
			let activeCategory = getDeepCategory(categories, category);
			console.log(activeCategory);
			if (activeCategory !== undefined)
				categoryStore.setActive(activeCategory);
			else categoryStore.setActiveDefault();
		}
	}, [category]);

	const onTagClick = async (category: ICategory) => {
		productStore.setProductLoading(false);
		filterStore.setActiveFiltersFromUrl([]);
		await Router.push(
			{
				pathname: '/shop',
				query: generateShopUrl(
					category.id,
					undefined,
					searchText?.toString(),
					undefined,
					undefined,
					1
				)
			},
			undefined,
			{ shallow: false, scroll: false }
		);
	};

	return (
		<div className="ps-categories-mobile">
			{categoryStore.activeCategory.id === ''
				? categories.map((category) => (
						<Tag
							className="ps--category-tag"
							onClick={() => onTagClick(category)}
							color="#108ee9"
							key={category.id}
						>
							{category.name}
						</Tag>
				  ))
				: categoryStore.activeCategory.children.map((category) => (
						<Tag
							className="ps--category-tag"
							onClick={() => onTagClick(category)}
							color="#108ee9"
							key={category.id}
						>
							{category.name}
						</Tag>
				  ))}
		</div>
	);
});

export default CategoryMenuMobile;
