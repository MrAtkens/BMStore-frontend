import React  from 'react';
import Link from 'next/link';
import { observer } from 'mobx-react-lite';

import AccountQuickLinksMobile from './modules/AccountQuickLinksMobile';

import userStore from "data/stores/userStore"
import cartStore from "data/stores/cartStore"
import {CART, LOGIN} from "constant/routes";

const MobileHeaderActions = observer(() => {
    return (
        <div className="navigation__right">
            <Link href={CART}>
                <a className="header__extra" href="#">
                    <i className='icon-bag2'/>
                    <span>
                        <i>{cartStore.carts ? cartStore.carts.length : 0}</i>
                    </span>
                </a>
            </Link>

            {userStore.isAuthenticated && Boolean(userStore.isAuthenticated) ? (
                <AccountQuickLinksMobile />
            ) : (
                <div className="header__extra">
                    <Link href={LOGIN}>
                        <i className='icon-user'/>
                    </Link>
                </div>
            )}
        </div>
    );
});

export default MobileHeaderActions;
