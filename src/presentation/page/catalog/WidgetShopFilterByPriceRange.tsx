import React, { useState } from 'react';
import { Slider } from 'antd';
import { useRouter } from 'next/router';
import { SHOP_PAGE } from 'constant/routes';

const WidgetShopFilterByPriceRange = () => {
    const Router = useRouter();
    const [min, setMin] = useState(0);
    const [max, setMax] = useState(2000);

    function handleChangeRange(value : any) {
        setMin(value[0]);
        setMax(value[1]);

        Router.push(SHOP_PAGE(undefined, undefined, undefined, undefined, value[0], value[1]));
    }

    return (
        <aside className="widget widget_shop">
            <figure>
                <h4 className="widget-title">По цене</h4>
                <Slider
                    range
                    defaultValue={[0, 1000000]}
                    max={1000000}
                    onAfterChange={(e) => handleChangeRange(e)}
                />
                <p>
                    Цена: {min} тг - {max} тг
                </p>
            </figure>
        </aside>
    );
};

export default WidgetShopFilterByPriceRange;
