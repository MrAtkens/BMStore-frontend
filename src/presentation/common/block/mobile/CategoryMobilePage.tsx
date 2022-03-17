import React from 'react';
import LazyLoad from 'react-lazyload';
import Link from 'next/link';

import { ICategory } from 'domain/interfaces/ICategory';
import { SHOP_PAGE } from 'constant/routes';
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
		if (categories.length % 2 === 0) {
			count++;
			if (count % 2 === 0) {
				const categoryItem = (
					<Link
						passHref
						href={SHOP_PAGE('category', item.id)}
						key={item.id}
					>
						<div className="category--mobile-image">
							<LazyLoad>
								<img src={item.imageUrl} alt="CATS" />
							</LazyLoad>
							<h3>{item.name}</h3>
						</div>
					</Link>
				);
				listBuffer.push(categoryItem);
				list.push(listBuffer);
				listBuffer = [];
			} else {
				const categoryItem = (
					<Link
						passHref
						href={SHOP_PAGE('category', item.id)}
						key={item.id}
					>
						<div className="category--mobile-image">
							<LazyLoad>
								<img src={item.imageUrl} alt="CATS" />
							</LazyLoad>
							<h3>{item.name}</h3>
						</div>
					</Link>
				);
				listBuffer.push(categoryItem);
			}
		} else {
			count++;
			if (count % 2 === 0) {
				const categoryItem = (
					<Link
						passHref
						href={SHOP_PAGE('category', item.id)}
						key={item.id}
					>
						<div className="category--mobile-image">
							<LazyLoad>
								<img src={item.imageUrl} alt="CATS" />
							</LazyLoad>
							<h3>{item.name}</h3>
						</div>
					</Link>
				);
				listBuffer.push(categoryItem);
				list.push(listBuffer);
				listBuffer = [];
			} else if (categories.length === count) {
				const categoryItem = (
					<Link
						passHref
						href={SHOP_PAGE('category', item.id)}
						key={item.id}
					>
						<div className="category--mobile-image">
							<LazyLoad>
								<img src={item.imageUrl} alt="CATS" />
							</LazyLoad>
							<h3>{item.name}</h3>
						</div>
					</Link>
				);
				listBuffer.push(categoryItem);
				list.push(listBuffer);
				listBuffer = [];
			} else {
				const categoryItem = (
					<Link
						passHref
						href={SHOP_PAGE('category', item.id)}
						key={item.id}
					>
						<div className="category--mobile-image">
							<LazyLoad>
								<img src={item.imageUrl} alt="CATS" />
							</LazyLoad>
							<h3>{item.name}</h3>
						</div>
					</Link>
				);
				listBuffer.push(categoryItem);
			}
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
