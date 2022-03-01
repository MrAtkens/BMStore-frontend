import React from 'react';

import TableInvoices from 'presentation/common/control/account/TableInvoices';
import { IInvoice } from 'domain/interfaces/IInvoice';

interface IInvoices {
	invoices: Array<IInvoice>;
}

const InvoicesTable = ({ invoices }: IInvoices) => {
	return (
		<div className="ps-page__content">
			<TableInvoices invoices={invoices} />
		</div>
	);
};
export default InvoicesTable;
