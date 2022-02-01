import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { Slider } from 'antd';

import { generateShopUrl } from 'helper/commons/products';
import productStore from 'data/stores/productStore';

const WidgetShopFilterByPriceRange = () => {
    const Router = useRouter();
    const [min, setMin] = useState(50);
    const [max, setMax] = useState(1000000);
    const { filters, category, searchText, page } = Router.query;

    useEffect(() => {
        if(Router.query.price_min !== undefined)
            setMin(parseInt(Router.query.price_min.toString()))
        else
            setMin(50)
        if(Router.query.price_max !== undefined)
            setMax(parseInt(Router.query.price_max.toString()))
        else
            setMax(1000000)
    }, [Router.query])


    function handleChangeRange(value: any) {
        setMin(value[0]);
        setMax(value[1]);
    }

    const handleAfterChange = async () => {
        productStore.setProductLoading(false)
        //Проверка на то есть ли у нас уже введённые данные о макс и мин цене в url и их изменение
        if (Router.asPath.includes("price_min") || Router.asPath.includes("price_max")) {
            await Router.push({
                pathname: '/shop',
                query: generateShopUrl(category, filters, searchText, min, max, page)
            }, undefined, { shallow: false, scroll: false })
        } else {
            await Router.push({
                pathname: '/shop',
                query: generateShopUrl(category, filters, searchText, min, max, page)
            }, undefined, { shallow: false, scroll: false })

        }
    }

    return (
        <aside className="widget widget_shop">
            <figure>
                <h4 className="widget-title">По цене</h4>
                <Slider
                    range
                    value={[min, max]}
                    defaultValue={[50, 1000000]}
                    max={1000000}
                    onChange={handleChangeRange}
                    onAfterChange={handleAfterChange}
                />
                <p>
                    Цена: {min} тг - {max} тг
                </p>
            </figure>
        </aside>
    );
};

export default WidgetShopFilterByPriceRange;
