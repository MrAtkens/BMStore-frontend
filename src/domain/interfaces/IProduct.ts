
interface IInfo{
	title: string,
	description: string
}
interface IFilter{
	key: string,
	value: string
}
export interface IImage{
	url: string,
	isMain: boolean
}

export interface IProduct{
	id : string,
	price : number,
	slug : string,
	info : IInfo,
	images : Array<IImage>
	filters : Array<IFilter>,
	category : string
}
