export const getWidget = (publicId, description, amount, currency, accountId, invoiceId, email) => {
	window.getPayWindow(publicId, description, amount, currency, accountId, invoiceId, email)
}
