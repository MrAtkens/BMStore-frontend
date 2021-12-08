import React, { useRef, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';
import Image from 'next/image';

import MobileHeaderActions from "presentation/common/layout/header/MobileHeaderActions";
import { HOME, PAYMENTS, SHOP_PAGE } from 'constant/routes';
import { editParamFromUrl } from 'helper/commons/products';

const HeaderMobile = () => {
    const inputEl = useRef(null);
    const [keyword, setKeyword] = useState('');
    const Router = useRouter()
    const { searchText } = Router.query

    function handleSubmit(e : any) {
        e.preventDefault();
        if(searchText?.includes("searchText")){
            //Удаление параметра из url и переадресация на новый без данного параметра
            Router.push(editParamFromUrl(Router.asPath, "searchText", keyword))
        }
        else {
            if (Router.asPath.includes("?"))
                Router.push(Router.asPath + `&searchText=${keyword}`)
            else
                Router.push(SHOP_PAGE(undefined, keyword))
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
                            <Link href={PAYMENTS}>
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
}


export default HeaderMobile;
