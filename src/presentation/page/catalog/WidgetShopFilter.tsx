import React  from 'react';
import { Radio } from 'antd';
import { useRouter } from 'next/router';

import { IFilter } from 'domain/interfaces/IFilter';
import { removeParamFromUrl } from 'helper/commons/products';


interface IWidgetShopFilters{
    filter: IFilter
}

const WidgetShopFilter = ({ filter } : IWidgetShopFilters) => {
    const Router = useRouter();
    const { filters } = Router.query;


    function handleSelectFilter(value : string) {
        //Проверка на то есть ли на самом деле данное значение в фильтре и нужно ли его убирать
        if(filters?.includes(value)){
            console.log(filters)
            //Удаление параметра из url и переадресация на новый без данного параметра
            Router.push(removeParamFromUrl(Router.asPath, "filters"))
        }
        else {
            if (Router.asPath.includes("?"))
                Router.push(Router.asPath + `&filters=${value}`)
            else
                Router.push(Router.asPath + `?filters=${value}`)
        }
    }

    return (
        <aside className="widget widget_shop widget_shop--brand">
            <h4 className="widget-title">{filter.name}</h4>
            <figure>
                {
                    filter.filters.data.map(item => (
                        <Radio checked={filters === item.slug} key={item.slug} onClick={() => handleSelectFilter(item.slug)} value={item.slug}>{item.name}</Radio>
                    ))
                }
            </figure>
        </aside>
    );
};

export default WidgetShopFilter;
