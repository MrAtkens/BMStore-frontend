import React, { useEffect, useState } from 'react';
import { GetServerSideProps } from 'next';
import { useRouter } from 'next/router';

import { categoryApiService, productsApiService } from 'data/API';
import { ICategory } from 'domain/interfaces/ICategory';
import { IProduct } from 'domain/interfaces/IProduct';
import { HOME, SHOP_PAGE } from 'constant/routes';

import ProductDetailBox from 'presentation/page/ProductDetailBox';

import SkeletonProductDetail from 'presentation/common/block/normal/skeletons/SkeletonProductDetail';
import ModuleRecommendedProducts from 'presentation/common/control/product/ModuleRecommendedProducts';
import BreadCrumb from 'presentation/common/typography/BreadCrumb';
import Layout from 'presentation/layout';
import ActualProductsMobile from '../../presentation/common/control/ActualProductsMobile';

interface IProductPage {
	categories: Array<ICategory>;
	product: IProduct;
}

const ProductPage = ({ categories, product }: IProductPage) => {
	const Router = useRouter();
	const [pageProduct, setPageProduct] = useState(product);
	const [loading, setLoading] = useState(true);

	const [size, setSize] = useState(0);
	const [isMobile, setIsMobile] = useState(false);

	const updateWidth = () => {
		if (typeof window !== 'undefined') setSize(window.innerWidth);
	};

	useEffect(() => {
		if (typeof window !== 'undefined') updateWidth();
	}, []);

	useEffect(() => {
		if (typeof window !== 'undefined') {
			window.addEventListener('resize', updateWidth);
			if (window.innerWidth < 700) {
				setIsMobile(true);
			} else {
				setIsMobile(false);
			}
			return () => window.removeEventListener('resize', updateWidth);
		} else return () => null;
	}, [size]);

	useEffect(() => {
		setPageProduct(product);
		setLoading(false);
	}, [Router.query]);

	const breadCrumb = [
		{
			text: 'Главная',
			url: HOME
		},
		{
			text: 'Каталог',
			url: SHOP_PAGE()
		},
		{
			text: pageProduct ? pageProduct.title : 'Загрузка...',
			url: null
		}
	];
	// Views
	let productView;
	if (!loading) {
		if (pageProduct) {
			productView = <ProductDetailBox product={pageProduct} />;
		} else {
		}
	} else {
		productView = <SkeletonProductDetail />;
	}
	return (
		<Layout categories={categories} title={product.title}>
			<div className="ps-page--simple">
				<BreadCrumb breadcrumb={breadCrumb} layout={'default'} />
				<div className="ps-page--product ps-page--product-box">
					<div className="container">
						{productView}
						{isMobile ? (
							<ActualProductsMobile
								productItems={product.productsSimilar}
								isRecommended={true}
							/>
						) : (
							<ModuleRecommendedProducts
								layout="fullwidth"
								productItems={product.productsSimilar}
							/>
						)}
					</div>
				</div>
			</div>
		</Layout>
	);
};
export const getServerSideProps: GetServerSideProps = async (context) => {
	const { pid } = context.query;
	const categoryResponse = await categoryApiService.getCategoriesByLanguage(
		'ru'
	);
	const productResponse = await productsApiService.getProductById(pid);

	if (productResponse.status === 404)
		return {
			notFound: true
		};

	if (categoryResponse.data === undefined)
		return {
			props: { categories: [], product: productResponse.data }
		};
	return {
		props: {
			categories: categoryResponse.data,
			product: productResponse.data
		}
	};
};

export default ProductPage;
