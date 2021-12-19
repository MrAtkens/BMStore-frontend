
interface ProductFilter{
	filterGroupId: string,
	filterGroupName: string,
	name: string,
	filterId: string
}
export interface IImage{
	url: string,
	isMain: boolean
}

export interface IProduct{
	id : string,
	slug : string,
	title: string,
	description: string
	price : number,
	images : Array<IImage>
	filters : Array<ProductFilter>,
	categoryId : string,
	categoryName : string
}
