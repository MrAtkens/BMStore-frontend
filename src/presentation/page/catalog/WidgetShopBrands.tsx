import React, { useState } from 'react';
import Link from 'next/link';
import { Radio } from 'antd';
import { useRouter } from 'next/router';

import { brandsArray } from "data/static/brands"
import { IBrand } from 'domain/interfaces/IBrand';

const WidgetShopBrands = () => {
    const Router = useRouter();
    const { slug } = Router.query;
    const [brands, setBrands] = useState(brandsArray);
    const [loading, setLoading] = useState(false);

    function handleSelectBrand(e : any) {
        Router.push(`/brand/${e.target.value}`);
    }

    // Views
    let brandsView;
    if (!loading) {
        if (brands && brands.length > 0) {
            const items = brands.map((item : IBrand) => (
                <li key={item.id}>
                    <Link href={`shop/${item.value}`}>{item.label}</Link>
                </li>
            ));
            brandsView = <ul className="ps-list--brands">{items}</ul>;
        } else {
        }
    } else {
        brandsView = <p>Загрузка...</p>;
    }
    return (
        <aside className="widget widget_shop widget_shop--brand">
            <h4 className="widget-title">По брендам</h4>
            <figure>
                <Radio.Group
                    defaultValue={slug}
                    options={brands}
                    onChange={handleSelectBrand}
                />
            </figure>
        </aside>
    );
};

export default WidgetShopBrands;
