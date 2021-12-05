import { ICategory } from './ICategory';
import { IFilter } from './IFilter';

export interface IProduct{
	id : string,
	title : string,
	price : number,
	category: ICategory,
	filters: Array<IFilter>
	quantity : number,
	imageUrl : string,
}
