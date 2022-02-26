import React from 'react';

import { IAddress } from 'domain/interfaces/IAddress';
import TableAddress from 'presentation/common/control/account/TableAddress';

interface IAddressTable {
	address: Array<IAddress>;
}

const AddressTable = ({ address }: IAddressTable) => {
	return (
		<div className="ps-page__content">
			<TableAddress address={address} />
		</div>
	);
};
export default AddressTable;
