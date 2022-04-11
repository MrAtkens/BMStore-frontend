import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import { ICategory } from 'domain/interfaces/ICategory';
import { SHOP_PAGE } from 'constant/routes';

//Нужно для формирование ячейки в 6 по вертикали и потом эти ячейки мы выстраеваем горизонтально
const defaultCategories = (categories: Array<ICategory>) => {
	let count = 0;
	// главный лист для полного формирование листа и также мы его возрващаем
	const list: any = [];
	// временный лист для записи ячейки
	let listBuffer: any = [];
	if (categories.length >= 6) {
		categories.map((category) => {
			count++;
			if (count === 6) {
				const categoryItem = (
					<Link
						passHref
						href={SHOP_PAGE('category', category.id)}
						key={category.id}
					>
						<div className="image-container">
							<Image
								loading="lazy"
								layout={'responsive'}
								width={500}
								height={500}
								src={
									category.imageUrl !== null
										? category.imageUrl
										: '/static/img/not-found.webp'
								}
								alt={category.name}
							/>
							<span className="category-title">
								{category.name}
							</span>
						</div>
					</Link>
				);
				listBuffer.push(categoryItem);
				list.push(listBuffer);
				listBuffer = [];
				count = 0;
			} else {
				const categoryItem = (
					<Link
						passHref
						href={SHOP_PAGE('category', category.id)}
						key={category.id}
					>
						<div className="image-container">
							<Image
								loading="lazy"
								layout={'responsive'}
								width={500}
								height={500}
								src={
									category.imageUrl !== null
										? category.imageUrl
										: '/static/img/not-found.webp'
								}
								alt={category.name}
							/>
							<span className="category-title">
								{category.name}
							</span>
						</div>
					</Link>
				);
				listBuffer.push(categoryItem);
			}
		});
		list.push(listBuffer);
	} else {
		categories.map((category) => {
			if (category.imageUrl !== null && category.imageUrl !== undefined) {
				count++;
				const categoryItem = (
					<Link
						passHref
						href={SHOP_PAGE('category', category.id)}
						key={category.id}
					>
						<div className="image-container">
							<Image
								loading="lazy"
								layout={'responsive'}
								width={500}
								height={500}
								src={
									category.imageUrl !== null
										? category.imageUrl
										: '/static/img/not-found.webp'
								}
								alt={category.name}
							/>
							<span className="category-title">
								{category.name}
							</span>
						</div>
					</Link>
				);
				listBuffer.push(categoryItem);
			}
		});
		list.push(listBuffer);
	}
	// Проверка на пустой array в последним элементе
	if (list[list.length - 1].length === 0 || list[list.length - 1] === null)
		list.pop();
	return list;
};

export default defaultCategories;
