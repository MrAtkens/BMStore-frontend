import React  from 'react';
import { Radio } from 'antd';
import { useRouter } from 'next/router';
import { IFilter } from 'domain/interfaces/IFilter';


interface IWidgetShopFilters{
    filter: IFilter
}

const WidgetShopFilter = ({ filter } : IWidgetShopFilters) => {
    const Router = useRouter();
    const { filters } = Router.query;

    function handleSelectFilter(value : string) {
        if(Router.asPath.includes("?"))
            Router.push(Router.asPath + `&filters=${value}`)
        else
            Router.push(Router.asPath + `?filters=${value}`)
    }

    return (
        <aside className="widget widget_shop widget_shop--brand">
            <h4 className="widget-title">{filter.name}</h4>
            <figure>
                {
                    filter.filters.data.map(item => (
                        <Radio checked={filters === item.slug} key={item.slug} onChange={() => handleSelectFilter(item.slug)} value={item.slug}>{item.name}</Radio>
                    ))
                }
            </figure>
        </aside>
    );
};

export default WidgetShopFilter;
