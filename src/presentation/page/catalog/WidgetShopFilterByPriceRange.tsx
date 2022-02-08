import React, { useEffect, useState } from 'react';
import { observer } from 'mobx-react-lite';
import { useRouter } from 'next/router';
import { Slider } from 'antd';

import { generateShopUrl } from 'helper/commons/products';
import productStore from 'data/stores/productStore';

const WidgetShopFilterByPriceRange = observer(() => {
    const Router = useRouter();
    const [min, setMin] = useState(productStore.minPrice);
    const [max, setMax] = useState(productStore.maxPrice);
    const { filters, category, searchText, page } = Router.query;

    useEffect(() => {
        if(Router.query.price_min !== undefined)
            setMin(parseInt(Router.query.price_min.toString()))
        else
            setMin(productStore.minPrice)
        if(Router.query.price_max !== undefined)
            setMax(parseInt(Router.query.price_max.toString()))
        else
            setMax(productStore.maxPrice)
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
                    defaultValue={[productStore.minPrice, productStore.maxPrice]}
                    max={productStore.maxPrice}
                    onChange={handleChangeRange}
                    onAfterChange={handleAfterChange}
                />
                <p>
                    Цена: {min} тг - {max} тг
                </p>
            </figure>
        </aside>
    );
});

export default WidgetShopFilterByPriceRange;
