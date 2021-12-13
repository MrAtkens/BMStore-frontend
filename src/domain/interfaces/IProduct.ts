
// interface IFilter{
// 	key: string,
// 	value: string
// }
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
	// filters : Array<IFilter>,
	// category : string
}
