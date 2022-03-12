import React, { useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import Image from 'next/image';
import Link from 'next/link';
import userStore from 'data/stores/userStore';

import { generateShopUrl, removeParamFromUrl } from 'helper/commons/products';
import { HOME, SHOP_PAGE } from 'constant/routes';
import productStore from 'data/stores/productStore';

const HeaderMobile = observer(() => {
	const Router = useRouter();
	const inputEl = useRef(null);
	const [keyword, setKeyword] = useState('');

	const { filters, category, searchText, price_min, price_max, page } =
		Router.query;

	async function handleSubmit(e: any) {
		if (e.key === 'Enter') {
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
	}

	return (
		<header className="header header--mobile" id="headerSticky">
			<div className="navigation--mobile">
				<div className="navigation__center">
					<Link passHref href={HOME}>
						<a className="ps-logo">
							<Image
								width={140}
								height={100}
								quality={100}
								src="/static/img/logo.webp"
								alt="TACS logo"
							/>
						</a>
					</Link>
				</div>
			</div>
			<div className="ps-search--mobile">
				<a
					href="#"
					className=""
					onClick={() => userStore.setIsMenuDrawer(true)}
				>
					<i className="icon-menu" />
				</a>
				<form className="ps-form--search-mobile">
					<div className="form-group--nest">
						<input
							ref={inputEl}
							value={keyword}
							className="form-control"
							type="text"
							name="search_text"
							placeholder="Я ищу..."
							onKeyDown={handleSubmit}
							onChange={(e) => setKeyword(e.target.value)}
						/>
					</div>
				</form>
			</div>
		</header>
	);
});

export default HeaderMobile;
