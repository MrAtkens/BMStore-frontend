import React  from 'react';
import { BackTop } from 'antd';

import PageLoader from 'presentation/common/block/PageLoader'

const MasterLayout = ({ children } : any) => {

	return (
		<>
			{children}
			<PageLoader />
			<BackTop>
				<button aria-label="to_top" className="ps-btn--backtop">
					<i className='icon-arrow-up'/>
				</button>
			</BackTop>
		</>
	);
};

export default MasterLayout;
