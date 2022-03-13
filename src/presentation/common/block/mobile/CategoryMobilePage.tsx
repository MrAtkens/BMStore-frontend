import React from 'react';
import LazyLoad from 'react-lazyload';

import { ICategory } from 'domain/interfaces/ICategory';
interface ICategoryBlock {
	categories: Array<ICategory>;
}

const CategoryMobilePage = ({ categories }: ICategoryBlock) => {
	let count = 0;
	// главный лист для полного формирование листа и также мы его возрващаем
	const list: any = [];
	// временный лист для записи ячейки
	let listBuffer: any = [];

	categories.map((item) => {
		count++;
		if (count === 2) {
			const categoryItem = (
				<div key={item.id} className="category--mobile-image">
					<LazyLoad>
						<img src={item.imageUrl} alt="CATS" />
					</LazyLoad>
					<h3>{item.name}</h3>
				</div>
			);
			listBuffer.push(categoryItem);
			listBuffer = [];
			count = 0;
			list.push(listBuffer);
		} else {
			const categoryItem = (
				<div key={item.id} className="category--mobile-image">
					<LazyLoad>
						<img src={item.imageUrl} alt="CATS" />
					</LazyLoad>
					<h3>{item.name}</h3>
				</div>
			);
			listBuffer.push(categoryItem);
		}
	});
	return (
		<div className="ps-category--mobile">
			{list.map((item, key) => (
				<div key={key} className="category--mobile-image-container">
					{item}
				</div>
			))}
		</div>
	);
};
export default CategoryMobilePage;