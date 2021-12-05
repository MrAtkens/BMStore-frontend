import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import { ICategory } from 'domain/interfaces/ICategory';
import Menu from '../../common/typography/menu/Menu';

interface IWidgetShopCategories{
    categories: Array<ICategory>
}

const WidgetShopCategories = ({categories} : IWidgetShopCategories) => {
    const Router = useRouter();
    const [loading] = useState(false);

    const { category } = Router.query;

    useEffect(() => {

    }, [category])

    // Views
    let categoriesView;
    if (!loading) {
        if (categories && categories.length > 0) {
            categoriesView =
                <ul className="ps-list--categories">
                    <Menu
                        source={categories}
                        className="menu--dropdown"
                    />
                </ul>;
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
