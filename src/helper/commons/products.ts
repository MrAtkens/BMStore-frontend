export const generateTempArray = (maxItems) => {
	let result : Array<any> = [];

	for (let i = 0; i < maxItems; i++) {
		result.push(i);
	}
	return result;
};

export const removeParamFromUrl = (url, parameterName) => {
	const firstSub = url.split('?')
	let secondSub = firstSub[1].split('&')
	if(secondSub.length !== 1) {
		secondSub.map(item => {
			if (item.includes(parameterName)) {
				const index = secondSub.indexOf(item)
				secondSub.splice(index, 1)
			}
		})
	}
	else{
		if(secondSub.includes(parameterName))
			secondSub = []
	}
	let answer = firstSub[0]

	if(secondSub.length != 0) {
		answer += '?'
		secondSub.map(item => {
			answer += item + '&'
		})
		answer = answer.substring(0, answer.length - 1);
	}
	return answer

}

interface JSObject {
	[key: string]: any
}


export const generateShopUrl = (category, filters, searchText, price_min, price_max, page) => {
	let obj : JSObject = {};
	if(category !== undefined)
		obj.category = category
	if(filters !== undefined && filters.length !== 0)
		obj.filters = filters
	if(searchText !== undefined)
		obj.searchText = searchText
	if(price_min !== undefined)
		obj.price_min = price_min
	if(price_max !== undefined)
		obj.price_max = price_max
	if(page !== undefined)
		obj.page = page
	return obj
}
