import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { Badge, Drawer } from 'antd';

import { ICategory } from 'domain/interfaces/ICategory';
import cartStore from 'data/stores/cartStore';
import PanelCartMobile from '../panel/PanelCartMobile';
import PanelCategories from '../panel/PanelCategories';
import PanelMenu from '../panel/PanelMenu';
import { useRouter } from 'next/router';
import productStore from 'data/stores/productStore';
import { LOGIN, WISHLIST } from 'constant/routes';
import userStore from '../../../../../data/stores/userStore';

interface INavigationList {
	categories: Array<ICategory>;
}

const NavigationList = observer(({ categories }: INavigationList) => {
	const Router = useRouter();
	const [userDrawer, setUserDrawer] = useState(false);
	const [wishlistDrawer, setWishlistDrawer] = useState(false);
	const [categoriesDrawer, setCategoriesDrawer] = useState(false);

	useEffect(() => {
		setUserDrawer(false);
		userStore.setIsMenuDrawer(false);
		cartStore.setIsMobileCartOpen(false);
		setCategoriesDrawer(false);
	}, [Router.asPath]);

	const handleDrawerClose = () => {
		setUserDrawer(false);
		userStore.setIsMenuDrawer(false);
		cartStore.setIsMobileCartOpen(false);
		setCategoriesDrawer(false);
	};

	const handleShowUserDrawer = async () => {
		if (userStore.isAuthenticated) {
			setUserDrawer(!userDrawer);
			userStore.setIsMenuDrawer(false);
			cartStore.setIsMobileCartOpen(!cartStore.isMobileCartOpen);
			setCategoriesDrawer(false);
		} else await Router.push(LOGIN);
	};

	const handleShowCartDrawer = () => {
		setUserDrawer(false);
		userStore.setIsMenuDrawer(false);
		cartStore.setIsMobileCartOpen(!cartStore.isMobileCartOpen);
		setCategoriesDrawer(false);
	};

	const handleShowWishlistDrawer = async () => {
		setUserDrawer(false);
		userStore.setIsMenuDrawer(false);
		cartStore.setIsMobileCartOpen(false);
		setCategoriesDrawer(false);
		await Router.push(WISHLIST);
	};

	const handleShowCategoriesDrawer = () => {
		setUserDrawer(false);
		userStore.setIsMenuDrawer(false);
		cartStore.setIsMobileCartOpen(false);
		setWishlistDrawer(false);
		setCategoriesDrawer(!categoriesDrawer);
	};

	return (
		<div className="navigation--list">
			<Drawer
				className="ps-panel--mobile"
				placement="right"
				closable={false}
				onClose={handleDrawerClose}
				visible={userStore.isMenuDrawer}
			>
				<div className="ps-panel--wrapper">
					<div className="ps-panel__header">
						<h3>Меню</h3>
						<span
							className="ps-panel__close"
							onClick={handleDrawerClose}
						>
							<i className="icon-cross" />
						</span>
					</div>
					<div className="ps-panel__content">
						<PanelMenu />
					</div>
				</div>
			</Drawer>
			<Drawer
				className="ps-panel--mobile"
				placement="right"
				closable={false}
				onClose={handleDrawerClose}
				visible={cartStore.isMobileCartOpen}
			>
				<div className="ps-panel--wrapper">
					<div className="ps-panel__header">
						<h3>Корзина</h3>
						<span
							className="ps-panel__close"
							onClick={handleDrawerClose}
						>
							<i className="icon-cross" />
						</span>
					</div>
					<div className="ps-panel__content">
						<PanelCartMobile />
					</div>
				</div>
			</Drawer>
			<Drawer
				className="ps-panel--mobile"
				placement="right"
				closable={false}
				onClose={handleDrawerClose}
				visible={categoriesDrawer}
			>
				<div className="ps-panel--wrapper">
					<div className="ps-panel__header">
						<h3>Категории</h3>
						<span
							className="ps-panel__close"
							onClick={handleDrawerClose}
						>
							<i className="icon-cross" />
						</span>
					</div>
					<div className="ps-panel__content">
						<PanelCategories categories={categories} />
					</div>
				</div>
			</Drawer>
			<div className="navigation__content">
				<a
					href="#"
					className={`navigation__item ${userDrawer ? 'active' : ''}`}
					onClick={handleShowUserDrawer}
				>
					<i className="icon-user" />
					<span> Аккаунт</span>
				</a>
				<a
					href="#"
					className={`navigation__item ${
						categoriesDrawer ? 'active' : ''
					}`}
					onClick={handleShowCategoriesDrawer}
				>
					<i className="icon-list4" />
					<span> Категории</span>
				</a>
				<a
					href="#"
					className={`navigation__item ${
						wishlistDrawer ? 'active' : ''
					}`}
					onClick={handleShowWishlistDrawer}
				>
					<Badge
						className="badge"
						color="#196354"
						showZero
						count={productStore.wishList.length}
					>
						<i className="icon-heart" />
					</Badge>
					<span> Избранные</span>
				</a>
				<a
					href="#"
					className={`navigation__item ${
						cartStore.isMobileCartOpen ? 'active' : ''
					}`}
					onClick={handleShowCartDrawer}
				>
					<Badge
						className="badge"
						color="#196354"
						showZero
						count={cartStore.cart.length}
					>
						<i className="icon-bag2" />
					</Badge>
					<span> Корзина</span>
				</a>
			</div>
		</div>
	);
});

export default NavigationList;
