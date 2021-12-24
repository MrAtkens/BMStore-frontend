import React from 'react';

import TableInvoices from 'presentation/common/block/account/TableInvoices';

const Orders = () => {
    return (
        <div className="col-lg-8">
            <div className="ps-page__content">
                <div className="ps-section--account-setting">
                    <div className="ps-section__header">
                        <h3>Заказы</h3>
                    </div>
                    <div className="ps-section__content">
                        <TableInvoices />
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Orders;
