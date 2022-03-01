import React from 'react';

import TablePenalties from 'presentation/common/control/account/TablePenalties';
import { IPenaltie } from 'domain/interfaces/IPenaltie';

interface IPenalties {
	penalties: Array<IPenaltie>;
}

const PenaltiesTable = ({ penalties }: IPenalties) => {
	return (
		<div className="ps-page__content">
			<TablePenalties penalties={penalties} />
		</div>
	);
};
export default PenaltiesTable;
