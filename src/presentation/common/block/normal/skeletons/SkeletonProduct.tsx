import React from 'react';
import { Skeleton } from 'antd';

const SkeletonProduct = () => {
    return (
        <div className="ps-skeleton ps-skeleton--product">
            <Skeleton.Input active size='large' style={{height: 160}} />
            <Skeleton active paragraph={{ rows: 4 }} />
        </div>
    );
};

export default SkeletonProduct;
