import React, { useState } from 'react';

import { ICategory } from 'domain/interfaces/ICategory';
import CategoryMenu from 'presentation/common/typography/menu/CategoryMenu';

interface IWidgetShopCategories{
    categories: Array<ICategory>
}

const WidgetShopCategories = ({categories} : IWidgetShopCategories) => {
    const [loading] = useState(false);

    // Views
    let categoriesView;
    if (!loading) {
        if (categories && categories.length > 0) {
            categoriesView =
                <ul className="ps-list--categories">
                    <CategoryMenu
                        mode={'inline'}
                        isDeep={true}
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
            <h4 className="widget-title">Категории </h4>
            {categoriesView}
        </aside>
    );
};

export default WidgetShopCategories;
