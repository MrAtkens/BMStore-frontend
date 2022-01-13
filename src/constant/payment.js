export const getWidget = (publicId, description, amount, currency, accountId, email) => {
	window.getPayWindow(publicId, description, amount, currency, accountId, email)
}
