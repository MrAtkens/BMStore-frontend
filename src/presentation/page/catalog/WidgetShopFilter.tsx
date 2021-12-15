import React  from 'react';
import { Checkbox } from 'antd';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';

import { IFilter } from 'domain/interfaces/IFilter';
import { generateShopUrl } from 'helper/commons/products';
import filterStore from "data/stores/filtersStore"
import productStore from 'data/stores/productStore';

interface IWidgetShopFilters{
    filter: IFilter
}

const WidgetShopFilter = observer(({ filter } : IWidgetShopFilters) => {
    const Router = useRouter();
    const { category, searchText, price_min, price_max, page } = Router.query;

    async function onChange(e) {
        filterStore.setActiveFilters(e.target)
        productStore.setProductLoading(false)
        await Router.push({
            pathname: '/shop',
            query: generateShopUrl(category, filterStore.activeFilters, searchText, price_min, price_max, page)
        }, undefined, { shallow: false, scroll: false })
    }

    return (
        <aside className="widget widget_shop widget_shop--brand">
            <h4 className="widget-title">{filter.name}</h4>
            <figure>
                {filter.filters.data.map(item => (
                    <Checkbox checked={filterStore.activeFilters.includes(item.filterId)} key={item.filterId} value={item.filterId} onChange={onChange}>{item.name}</Checkbox>
                ))}
            </figure>
        </aside>
    );
});

export default WidgetShopFilter;
