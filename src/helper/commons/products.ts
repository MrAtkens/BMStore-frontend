export const generateTempArray = (maxItems) => {
	let result : Array<any> = [];

	for (let i = 0; i < maxItems; i++) {
		result.push(i);
	}
	return result;
};

export const addParamToUrl = (url, parameterName, value) => {
	if(!url.includes('?'))
		url += "/shop?" + parameterName + "=" + value
	else
		url += "&" + parameterName + "=" + value
	return url
}

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

export const editParamFromUrl = (url, parameterName, value) => {
	const firstSub = url.split('?')
	let secondSub = firstSub[1].split('&')
	if(secondSub.length === 0) {
		secondSub = []
	}
	else{
		secondSub.map(item => {
			if (item.includes(parameterName)) {
				const index = secondSub.indexOf(item)
				let parameter = item.split('=')
				parameter[1] = value
				secondSub[index] = parameter[0] + '=' + parameter[1];
			}
		})
	}
	let answer = firstSub[0]

	answer += '?'
	secondSub.map(item => {
		answer += item + '&'
	})
	answer = answer.substring(0, answer.length - 1);
	return answer
}


export const editFilterParamFromUrl = (url, parameterName, value) => {
	const firstSub = url.split('?')
	let secondSub = firstSub[1].split('&')
	console.log(secondSub)
	if(secondSub.length === 0) {
		secondSub = []
	}
	else{
		secondSub.map(item => {
			if (item.includes("filters")) {
				const index = secondSub.indexOf(item)
				let parameter = item.split('=')
				parameter[1] = value
				console.log(parameter[1])
				let filters = parameter[1].split(':')
				console.log("Filters")
				console.log(filters)
				const editedFilters = filters.map(item => {
					if(item.includes(parameterName)){
						let filter = item.split('-')
						filter[1] = value
						return `${filter[0]}-${filter[1]}`
					}
					return item
				})
				console.log("Edited")
				console.log(editedFilters)
				secondSub[index] = parameter[0] + '=' + editedFilters.toString();
			}
		})
	}
	let answer = firstSub[0]

	answer += '?'
	secondSub.map(item => {
		answer += item + '&'
	})
	answer = answer.substring(0, answer.length - 1);
	return answer
}


interface JSObject {
	[key: string]: any
}


export const generateShopUrl = (category, filters, searchText, price_min, price_max) => {
	let obj : JSObject = {};
	if(category !== undefined)
		obj.category = category
	if(filters !== undefined)
		obj.filters = filters
	if(searchText !== undefined)
		obj.searchText = searchText
	if(price_min !== undefined)
		obj.price_min = price_min
	if(price_max !== undefined)
		obj.price_max = price_max
	return obj
}
