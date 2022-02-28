export const getWidget = (
	publicId,
	description,
	amount,
	currency,
	accountId,
	email
) => {
	const response = window.getPayWindow(
		publicId,
		description,
		amount,
		currency,
		accountId,
		email
	);
	return response;
};
