import React, { useRef, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';


import productStore from 'data/stores/productStore';
import { generateShopUrl, removeParamFromUrl } from 'helper/commons/products';
import { HOME, ORDERS, SHOP_PAGE } from 'constant/routes';

import MobileHeaderActions from "presentation/common/layout/header/MobileHeaderActions";

const HeaderMobile = observer(() => {
    const inputEl = useRef(null);
    const [keyword, setKeyword] = useState('');
    const Router = useRouter()
    const { filters, category, searchText, price_min, price_max, page } = Router.query

    function handleSubmit(e : any) {
        e.preventDefault();
        productStore.setProductLoading(false)
        if(keyword === ''){
            Router.push(SHOP_PAGE(), undefined, { scroll: false })
        }
        else {
            if (keyword === '' && searchText !== undefined)
                Router.push(removeParamFromUrl(Router.asPath, "searchText"))
            else
                Router.push({
                    pathname: '/shop', query: generateShopUrl(category, filters, keyword,
                        price_min, price_max, page)
                }, undefined, { shallow: false, scroll: false })
        }
    }
    return (
        <header className="header header--mobile">
            <div className="header__top">
                <div className="header__left">
                    <p>Добро пожаловать в магазин строй материалов</p>
                </div>
                <div className="header__right">
                    <ul className="navigation__extra">
                        <li>
                            <Link href={ORDERS}>
                                <a>Узнать статус покупки</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="navigation--mobile">
                <div className="navigation__left">
                    <Link href={HOME}>
                        <a className="ps-logo">
                            <Image
                                width={156}
                                height={32}
                                src="/static/img/logo_light.png"
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
                    method="get">
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
                            <i className='icon-magnifier'/>
                        </button>
                    </div>
                </form>
            </div>
        </header>
    )
})


export default HeaderMobile;
