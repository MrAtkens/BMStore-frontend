import React from 'react';

import OrderTracking from 'presentation/common/control/OrderTracking';

const Orders = () => {
    return (
        <div className="ps-page__content">
            <div className="ps-section--account-setting">
                <OrderTracking />
            </div>
        </div>
    );
}
export default Orders;
