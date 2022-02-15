import React from 'react';
import Link from 'next/link';
import { IProduct } from 'domain/interfaces/IProduct';
import { HOME } from 'constant/routes';

interface IModuleProductDetailDescription {
	product: IProduct;
}

const ModuleProductDetailDescription = ({
	product
}: IModuleProductDetailDescription) => (
	<div className="ps-product__desc">
		<p>
			Статус:
			{product.isDeleted ? (
				<Link passHref href={HOME}>
					<strong className="ps-tag--out-stock">
						Продукт удален
					</strong>
				</Link>
			) : product.isActive ? (
				<Link passHref href={HOME}>
					<strong className="ps-tag--out-stock"> В наличий</strong>
				</Link>
			) : (
				<Link passHref href={HOME}>
					<strong className="ps-tag--out-stock">
						{' '}
						Нет в наличий
					</strong>
				</Link>
			)}
		</p>
		{/*<p><pre>{product.description}</pre></p>*/}
		{/*<ul className="ps-list--dot">*/}
		{/*    {product.filters.map(item => (*/}
		{/*        <li key={item.filterId}>{item.filterGroupName} : {item.name}</li>*/}
		{/*    ))}*/}
		{/*</ul>*/}
	</div>
);

export default ModuleProductDetailDescription;
