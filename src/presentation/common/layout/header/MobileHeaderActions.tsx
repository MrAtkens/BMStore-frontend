import React  from 'react';
import Link from 'next/link';
import { observer } from 'mobx-react-lite';

import AccountQuickLinksMobile from './modules/AccountQuickLinksMobile';

import userStore from "data/stores/userStore"
import { LOGIN, WISHLIST } from 'constant/routes';
import productStore from 'data/stores/productStore';
import cartStore from 'data/stores/cartStore';

const MobileHeaderActions = observer(() => {
    return (
        <div className="navigation__right">
            <Link passHref href={WISHLIST}>
                <a className="header__extra">
                    <i className='icon-heart'/>
                    <span>
                        <i>{productStore.wishList.length}</i>
                    </span>
                </a>
            </Link>
            <a onClick={() => cartStore.setIsMobileCartOpen(true)} className="header__extra" href="#">
                <i className='icon-bag2'/>
                <span>
                        <i>{cartStore.cart ? cartStore.cart.length : 0}</i>
                </span>
            </a>
            {userStore.isAuthenticated && Boolean(userStore.isAuthenticated) ? (
                <AccountQuickLinksMobile />
            ) : (
                <div className="header__extra">
                    <Link passHref href={LOGIN}>
                        <i className='icon-user'/>
                    </Link>
                </div>
            )}
        </div>
    );
});

export default MobileHeaderActions;
