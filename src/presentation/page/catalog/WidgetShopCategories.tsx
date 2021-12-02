import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Link from 'next/link';

import { ICategory } from 'domain/interfaces/ICategory';
import { CATEGORY } from 'constant/routes';

interface IWidgetShopCategories{
    categories: Array<ICategory>
}

const WidgetShopCategories = ({categories} : IWidgetShopCategories) => {
    const Router = useRouter();
    const [loading, setLoading] = useState(false);

    const { category } = Router.query;

    useEffect(() => {

    }, [category])

    // Views
    let categoriesView;
    if (!loading) {
        if (categories && categories.length > 0) {
            const items = categories.map((item) => (
                <li
                    key={item.slug}
                    className={item.slug === category ? 'active' : ''}>
                    <Link href={CATEGORY(item.slug)}>{item.name}</Link>
                </li>
            ));
            categoriesView = <ul className="ps-list--categories">{items}</ul>;
        } else {
        }
    } else {
        categoriesView = <p>Загрузка...</p>;
    }

    return (
        <aside className="widget widget_shop">
            <h4 className="widget-title">Категорий </h4>
            {categoriesView}
        </aside>
    );
};

export default WidgetShopCategories;
