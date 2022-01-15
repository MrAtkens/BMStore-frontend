import React from 'react';
import { observer } from 'mobx-react-lite';
import Link from "next/link"
import MiniCart from './modules/MiniCart';
import AccountQuickLinks from './modules/AccountQuickLinks';
import { WISHLIST } from 'constant/routes';

import productStore from "data/stores/productStore"

const ElectronicHeaderActions = observer(() => {
    return (
        <div className="header__actions">
            <Link passHref href={WISHLIST}>
                <a className="header__extra">
                    <i className='icon-heart'/>
                    <span>
                        <i>{productStore.wishList.length}</i>
                    </span>
                </a>
            </Link>
            <MiniCart />
            <AccountQuickLinks/>
        </div>
    );
})

export default ElectronicHeaderActions;
