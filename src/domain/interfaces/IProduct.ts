import { ICategory } from './ICategory';
import { IFilter } from './IFilter';

export interface IProduct{
	id : string,
	title : string,
	price : number,
	category: ICategory,
	quantity : number,
	imageUrl : string,
	filter: Array<IFilter>
}
