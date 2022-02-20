import { ICategory } from 'domain/interfaces/ICategory';

export function getDeepCategory(
	categories: Array<ICategory>,
	id: string | string[]
) {
	let result;
	console.log(categories.length);
	categories.map((item) => {
		if (item.id === id) result = item;
		else if (item.children.length > 0)
			result = getDeepCategory(item.children, id);
	});
	console.log(result);
	return result;
}
