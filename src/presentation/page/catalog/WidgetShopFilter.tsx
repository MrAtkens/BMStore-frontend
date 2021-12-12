import React from 'react';
import { Checkbox } from 'antd';
import { useRouter } from 'next/router';

import { IFilter } from 'domain/interfaces/IFilter';
import { generateShopUrl, removeParamFromUrl } from '../../../helper/commons/products';


interface IWidgetShopFilters{
    filter: IFilter
}

const WidgetShopFilter = ({ filter } : IWidgetShopFilters) => {
    const Router = useRouter();
    const { filters, category, searchText, price_min, price_max } = Router.query;

    function onChange(checkedValues) {
        console.log(filters)
        if(checkedValues.length === 0)
            Router.push(removeParamFromUrl(Router.asPath, "filters"), undefined, {scroll: false})
        else{
            let isAvailable = false
            checkedValues.map(item => {
                if(filters?.includes(item)){
                    console.log(generateShopUrl(category, filters, searchText, price_min, price_max))
                    Router.push({pathname: '/shop', query: generateShopUrl(category, checkedValues, searchText, price_min, price_max)}, undefined, {shallow: true, scroll: false})
                    isAvailable = true
                }
            })
            if(!isAvailable){
                console.log(generateShopUrl(category, filters, searchText, price_min, price_max))
                Router.push({pathname: '/shop', query: generateShopUrl(category, checkedValues, searchText, price_min, price_max)}, undefined, {shallow: true, scroll: false})
            }
        }
    }

    return (
        <aside className="widget widget_shop widget_shop--brand">
            <h4 className="widget-title">{filter.name}</h4>
            <figure>
                <Checkbox.Group
                    options={filter.filters.data.map(column => ({label:column.name, value: column.filterId}))}
                    onChange={onChange}
                />
            </figure>
        </aside>
    );
};

export default WidgetShopFilter;
