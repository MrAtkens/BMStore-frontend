export interface Filter{
	name: string,
	slug: string,
	filterGroupId: string
}

interface Filters{
	count: number,
	data: Array<Filter>
}

export interface IFilter{
	name: string,
	slug: string,
	filters: Filters,
	categoryId: string
}
