import React from 'react';
import { Skeleton } from 'antd';

const SkeletonProduct = () => {
    return (
        <div className="ps-skeleton ps-skeleton--product">
            <Skeleton.Input active={true} size="default" style={{height: 160}} />
            <Skeleton paragraph={{ rows: 4 }} />
        </div>
    );
};

export default SkeletonProduct;
