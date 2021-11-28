import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

import MobileHeaderActions from "presentation/common/layout/header/MobileHeaderActions";
import { HOME, PAYMENTS } from 'constant/routes';

const HeaderMobile = () => {
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
                            className="form-control"
                            type="text"
                            placeholder="Поиск..."
                        />
                        <button>
                            <i className='icon-magnifier'/>
                        </button>
                    </div>
                </form>
            </div>
        </header>
    )
}


export default HeaderMobile;
