import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import { Pagination } from 'antd';

import Product from 'presentation/common/control/products/Product';
import ProductWide from 'presentation/common/control/products/ProductWide';
import SkeletonProduct from 'presentation/common/block/normal/skeletons/SkeletonProduct';

import productStore from 'data/stores/productStore';

import { generateTempArray } from 'helper/commons/header';
import { generateShopUrl } from 'helper/commons/products';

interface IShopItems {
	columns: number;
	pageSize: number;
	size: number;
}

const ShopItems = observer(
	({ columns = 4, pageSize = 16, size }: IShopItems) => {
		const Router = useRouter();
		const [page, setPage] = useState(1);
		const [listView, setListView] = useState(true);
		const [isMobile, setIsMobile] = useState(false);
		const { filters, category, searchText, price_min, price_max } =
			Router.query;

		const [classes, setClasses] = useState(
			'col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6'
		);

		useEffect(() => {
			if (size < 1000) {
				setIsMobile(true);
				setListView(true);
			} else setIsMobile(false);
		}, [size]);

		function handleChangeViewMode(e: any) {
			e.preventDefault();
			setListView(!listView);
		}

		function handlePagination(pageNumber: number) {
			productStore.setProductLoading(false);
			Router.push(
				{
					pathname: '/shop',
					query: generateShopUrl(
						category,
						filters,
						searchText,
						price_min,
						price_max,
						pageNumber
					)
				},
				undefined,
				{ shallow: false, scroll: true }
			).then(() => {
				setTimeout(() => {
					productStore.setProductLoading(true);
				}, 1000);
			});
		}

		// eslint-disable-next-line react-hooks/exhaustive-deps
		const handleSetColumns = () => {
			switch (columns) {
				case 2:
					setClasses('col-xl-6 col-lg-6 col-md-6 col-sm-6 col-6');
					return 2;
				case 3:
					setClasses('col-xl-4 col-lg-4 col-md-4 col-sm-6 col-6');
					return 3;
				case 4:
					setClasses('col-xl-3 col-lg-4 col-md-6 col-sm-6 col-6');
					return 4;
				case 6:
					setClasses('col-xl-2 col-lg-4 col-md-6 col-sm-6 col-6');
					return 6;

				default:
					setClasses('col-xl-4 col-lg-4 col-md-3 col-sm-6 col-6');
					return 0;
			}
		};

		useEffect(() => {
			setPage(parseInt(Router.query.page as string));
			handleSetColumns();
		}, [Router.query, handleSetColumns]);

		// Views
		let productItemsView;
		if (productStore.isProductsLoading) {
			if (productStore.products && productStore.products.length > 0) {
				if (listView) {
					const items = productStore.products.map((item) => (
						<div className={classes} key={item.id}>
							<Product product={item} />
						</div>
					));
					productItemsView = (
						<div className="ps-shop-items">
							<div className="row">{items}</div>
						</div>
					);
				} else {
					productItemsView = productStore.products.map((item) => (
						<ProductWide key={item.id} product={item} />
					));
				}
			} else {
				productItemsView = <p>???????????????? ???? ??????????????.</p>;
			}
		} else {
			const skeletonItems = generateTempArray(pageSize).map((item) => (
				<div className={classes} key={item}>
					<SkeletonProduct />
				</div>
			));
			productItemsView = <div className="row">{skeletonItems}</div>;
		}

		return (
			<div className="ps-shopping">
				<div className="ps-shopping__header">
					<p>
						<strong className="mr-2">
							{productStore.productCount}
						</strong>
						???????????????? ??????????????????
					</p>
					{isMobile ? null : (
						<div className="ps-shopping__actions">
							{/*<ModuleShopSortBy />*/}
							<div className="ps-shopping__view">
								<p>??????</p>
								<ul className="ps-tab-list">
									<li className={listView ? 'active' : ''}>
										<a
											href="#"
											onClick={(e) =>
												handleChangeViewMode(e)
											}
										>
											<i className="icon-grid" />
										</a>
									</li>
									<li className={!listView ? 'active' : ''}>
										<a
											href="#"
											onClick={(e) =>
												handleChangeViewMode(e)
											}
										>
											<i className="icon-list4" />
										</a>
									</li>
								</ul>
							</div>
						</div>
					)}
				</div>
				<div className="ps-shopping__content">{productItemsView}</div>
				<div className="ps-shopping__footer text-center">
					<div className="ps-pagination">
						<Pagination
							total={productStore.productCount}
							pageSize={pageSize}
							responsive={true}
							showSizeChanger={false}
							current={page !== undefined ? page : 1}
							onChange={(e) => handlePagination(e)}
						/>
					</div>
				</div>
			</div>
		);
	}
);

export default ShopItems;
