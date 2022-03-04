import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { Modal } from 'antd';

import { CONTACTS, HOME, LOGIN, ORDERS, SHOP_PAGE } from 'constant/routes';
import { menuLinks } from 'constant/menus/quickLinks';
import { isUserAuth } from 'helper/commons/userHelper';
import { ICategory } from 'domain/interfaces/ICategory';
import { stickyHeader } from 'helper/commons/header';

import ElectronicHeaderActions from 'presentation/common/layout/header/ElectronicHeaderActions';
import CategoryMenu from 'presentation/common/typography/menu/CategoryMenu';
import SearchHeader from 'presentation/common/layout/header/SearchHeader';
import MenuCustom from 'presentation/common/typography/menu/MenuCustom';

interface IHeader {
	categories: Array<ICategory>;
}

const Header = ({ categories }: IHeader) => {
	const Router = useRouter();
	const [isModalVisible, setIsModalVisible] = useState(false);

	useEffect(() => {
		window.addEventListener('scroll', stickyHeader);
	}, []);

	const onOrdersClick = async () => {
		if (isUserAuth()) await Router.push(ORDERS);
		else setIsModalVisible(true);
	};

	return (
		<header
			className="header header--standard header--market-place-1"
			id="headerSticky"
		>
			<div className="header__top">
				<div className="container">
					<div className="header__left">
						<p>Приветствуем в интернет-магазине TACS!</p>
					</div>
					<div className="header__right">
						<ul className="header__top-links">
							<li>
								<Link passHref href={SHOP_PAGE()}>
									<a>Магазин</a>
								</Link>
							</li>
							<li>
								<Link passHref href={CONTACTS}>
									<a>Контакты</a>
								</Link>
							</li>
							{/*<li>*/}
							{/*    <Link href={ABOUT_US}>*/}
							{/*        <a>О нас</a>*/}
							{/*    </Link>*/}
							{/*</li>*/}
							<li onClick={onOrdersClick}>
								Узнать статус заказа
							</li>
						</ul>
					</div>
				</div>
			</div>
			<div className="header__content">
				<div className="container">
					<div className="header__content-left">
						<Link passHref href={HOME}>
							<a className="ps-logo">
								<Image
									width={220}
									height={70}
									quality={100}
									src="/static/img/logo.webp"
									alt="TACS logo"
								/>
							</a>
						</Link>

						<div className="menu--product-categories">
							<div className="menu__toggle">
								<i className="icon-menu" />
								<span> Категории</span>
							</div>
							<div className="menu__content">
								<CategoryMenu
									isDeep={false}
									source={categories}
									mode={'vertical'}
									className="menu--dropdown"
								/>
							</div>
						</div>
					</div>
					<div className="header__content-center">
						<SearchHeader />
					</div>
					<div className="header__content-right">
						<ElectronicHeaderActions />
					</div>
				</div>
			</div>
			<nav className="navigation">
				<div className="container">
					<div className="navigation__left">
						<div className="menu--product-categories">
							<div className="menu__toggle">
								<i className="icon-menu" />
								<span> Категории</span>
							</div>
							<div className="menu__content">
								<CategoryMenu
									isDeep={false}
									source={categories}
									mode={'vertical'}
									className="menu--dropdown"
								/>
							</div>
						</div>
					</div>
					<div className="navigation__right">
						<MenuCustom
							source={menuLinks}
							className="menu--dropdown"
							mode={'horizontal'}
						/>
					</div>
					<div className="ps-block--header-hotline inline">
						<p>
							<i className="icon-telephone" />
							Телефон:
							<strong> 88003355335</strong>
						</p>
					</div>
				</div>
			</nav>
			<Modal
				title="Как узнать статус заказа?"
				visible={isModalVisible}
				okText={'Войти'}
				cancelText={'Закрыть'}
				onOk={() => Router.push(LOGIN)}
				onCancel={() => setIsModalVisible(false)}
			>
				<p>
					1. Вы можете войти в аккаунт или зарегистрироваться чтобы
					посмотреть ваши заказы через личный кабинет. Для этого
					нажмите на кнопку «Войти»
				</p>
				<p>
					2. Вы можете позвонить нам по номеру телефона: 88003355335
				</p>
			</Modal>
		</header>
	);
};

export default Header;
