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
				console.log(item)
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
				console.log("Изменение данных")
				secondSub[index] = parameter[0] + '=' + parameter[1];
				console.log(secondSub[index])
			}
		})
	}
	let answer = firstSub[0]

	answer += '?'
	secondSub.map(item => {
		console.log(item)
		answer += item + '&'
	})
	console.log("Ответ")
	answer = answer.substring(0, answer.length - 1);
	console.log(answer)
	return answer

}
