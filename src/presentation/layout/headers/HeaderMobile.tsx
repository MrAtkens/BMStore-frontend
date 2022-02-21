import React, { useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';
import { Modal } from 'antd';

import { generateShopUrl, removeParamFromUrl } from 'helper/commons/products';
import { HOME, LOGIN, ORDERS, SHOP_PAGE } from 'constant/routes';
import { isUserAuth } from 'helper/commons/userHelper';
import productStore from 'data/stores/productStore';

import MobileHeaderActions from 'presentation/common/layout/header/MobileHeaderActions';

const HeaderMobile = observer(() => {
	const Router = useRouter();
	const inputEl = useRef(null);
	const [keyword, setKeyword] = useState('');
	const [isModalVisible, setIsModalVisible] = useState(false);

	const { filters, category, searchText, price_min, price_max, page } =
		Router.query;

	async function handleSubmit(e: any) {
		e.preventDefault();
		productStore.setProductLoading(false);
		if (keyword === '') {
			await Router.push(SHOP_PAGE(), undefined, { scroll: false });
		} else {
			if (keyword === '' && searchText !== undefined)
				await Router.push(
					removeParamFromUrl(Router.asPath, 'searchText')
				);
			else
				await Router.push(
					{
						pathname: '/shop',
						query: generateShopUrl(
							category,
							filters,
							keyword,
							price_min,
							price_max,
							page
						)
					},
					undefined,
					{ shallow: false, scroll: false }
				);
		}
	}

	const onOrdersClick = async () => {
		if (isUserAuth()) await Router.push(ORDERS);
		else setIsModalVisible(true);
	};

	return (
		<header className="header header--mobile">
			<div className="header__top">
				<div className="header__left">
					<p>Добро пожаловать в магазин строй материалов</p>
				</div>
				<div className="header__right">
					<ul className="navigation__extra">
						<li>
							<Link passHref href={SHOP_PAGE()}>
								<a>Магазин</a>
							</Link>
						</li>
						{/*<li>*/}
						{/*    <Link passHref href={CONTACTS}>*/}
						{/*        <a>Контакты</a>*/}
						{/*    </Link>*/}
						{/*</li>*/}
						{/*<li>*/}
						{/*    <Link href={ABOUT_US}>*/}
						{/*        <a>О нас</a>*/}
						{/*    </Link>*/}
						{/*</li>*/}
						<li>
							<a onClick={onOrdersClick}>Узнать статус заказа</a>
						</li>
					</ul>
				</div>
			</div>
			<div className="navigation--mobile">
				<div className="navigation__left">
					<Link passHref href={HOME}>
						<a className="ps-logo">
							<Image
								width={156}
								height={32}
								src="/static/img/logo_light.webp"
								alt="martfury"
							/>
						</a>
					</Link>
				</div>
				<MobileHeaderActions />
			</div>
			<div className="ps-search--mobile">
				<form
					className="ps-form--search-mobile"
					action={HOME}
					method="get"
				>
					<div className="form-group--nest">
						<input
							ref={inputEl}
							value={keyword}
							className="form-control"
							type="text"
							name="search_text"
							placeholder="Я ищу..."
							onChange={(e) => setKeyword(e.target.value)}
						/>
						<button onClick={handleSubmit} name="search">
							<i className="icon-magnifier" />
						</button>
					</div>
				</form>
			</div>
			<Modal
				title="Как узнать статус заказа?"
				visible={isModalVisible}
				okText={'Зайти'}
				cancelText={'Закрыть'}
				onOk={() => Router.push(LOGIN)}
				onCancel={() => setIsModalVisible(false)}
			>
				<p>
					{' '}
					1. Вы можете авторизоваться и просмотреть ваши заказы через
					личный кабинет. Для этого нажмите на кнопку «Войти»
				</p>
				<p>
					2. Вы можете позвонить нам по номеру телефона: 88003355335
				</p>
			</Modal>
		</header>
	);
});

export default HeaderMobile;
