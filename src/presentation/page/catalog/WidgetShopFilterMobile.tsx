import React from 'react';
import { Checkbox, Collapse } from 'antd';
import { useRouter } from 'next/router';
import { observer } from 'mobx-react-lite';
const { Panel } = Collapse;
import { CaretRightOutlined } from '@ant-design/icons';

import { IFilter } from 'domain/interfaces/IFilter';
import { generateShopUrl } from 'helper/commons/products';
import filterStore from 'data/stores/filtersStore';
import productStore from 'data/stores/productStore';

interface IWidgetShopFilter {
	filter: IFilter;
}

const WidgetShopFilterMobile = observer(({ filter }: IWidgetShopFilter) => {
	const Router = useRouter();
	const { category, searchText, price_min, price_max, page } = Router.query;

	async function onChange(e) {
		filterStore.setActiveFilters(e.target);
		productStore.setProductLoading(false);
		await Router.push(
			{
				pathname: '/shop',
				query: generateShopUrl(
					category,
					filterStore.activeFilters,
					searchText,
					price_min,
					price_max,
					page
				)
			},
			undefined,
			{ shallow: false, scroll: false }
		);
	}

	return (
		<Collapse
			bordered={false}
			defaultActiveKey={['1']}
			expandIcon={({ isActive }) => (
				<CaretRightOutlined rotate={isActive ? 90 : 0} />
			)}
			className="widget widget_shop widget_shop--brand"
		>
			<Panel
				className="filters-collapse-panel"
				header={filter.name}
				key="1"
			>
				<figure>
					{filter.filters.data.map((item) => (
						<Checkbox
							checked={filterStore.activeFilters.includes(
								item.filterId
							)}
							key={item.filterId}
							value={item.filterId}
							onChange={onChange}
						>
							{item.name}
						</Checkbox>
					))}
				</figure>
			</Panel>
		</Collapse>
	);
});

export default WidgetShopFilterMobile;
