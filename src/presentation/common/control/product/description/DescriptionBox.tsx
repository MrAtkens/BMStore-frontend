import React  from 'react';

import { Tabs } from 'antd';
const { TabPane } = Tabs;

import { IProduct } from 'domain/interfaces/IProduct';

import PartialDescription from './PartialDescription';
import PartialSpecification from './PartialSpecification';

interface IDescriptionBox{
    product: IProduct
}

const DescriptionBox = ({product} : IDescriptionBox) => {
    return (
        <div className="ps-product__box">
            <Tabs defaultActiveKey="1">
                <TabPane tab="Описание" key="1">
                    <PartialDescription product={product} />
                </TabPane>
                <TabPane tab="Характеристики" key="2">
                    <PartialSpecification product={product} />
                </TabPane>
            </Tabs>
        </div>
    );
}

export default DescriptionBox;
