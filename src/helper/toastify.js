import { notification } from 'antd';

//Errors Toast
//Status 500 Iternal Server Error
export const toastServerError = () => {
	notification.error({
		message: 'Ошибка 500',
		description:
			'На данный момент на стороне сервера ошибка, пожалуйста повторите попытку позже',
		duration: 5,
		placement: 'bottomRight'
	});
};

//Status 409 Conflict(Login occuped)
export const toastLoginOccuped = () => {
	notification.error({
		message: 'Ошибка 409',
		description: 'Данный пользователь уже зарегистрирован',
		duration: 5,
		placement: 'bottomRight'
	});
};
//Status 404
export const toastUserNotFound = () => {
	notification.error({
		message: 'Ошибка 404',
		description: 'Данный пользователь не найден',
		duration: 5,
		placement: 'bottomRight'
	});
};

export const toastUserNotFoundAuth = () => {
	notification.error({
		message: 'Ошибка входа',
		description: 'Возможно вы не верно ввели номер телефона или пароль',
		duration: 5,
		placement: 'bottomRight'
	});
};

export const toastProductNotFound = () => {
	notification.error({
		message: 'Ошибка 404',
		description: 'Данный товар не найден',
		duration: 5,
		placement: 'bottomRight'
	});
};
//Status 401
export const toastAuthError = () => {
	notification.error({
		message: 'Ошибка 401',
		description: 'Вы неверно ввели логин или пароль',
		duration: 5,
		placement: 'bottomRight'
	});
};

export const toastUnauthorizedError = () => {
	notification.error({
		message: 'Вы не аутентифицированы',
		description: 'Для выполнения этих действий вам надо зайти в систему',
		duration: 5,
		placement: 'bottomRight'
	});
};
// warn
export const toastRegistrationError = () => {
	notification.warning({
		message: 'Ошибка регистраций',
		description: 'Данный номер телефона или почта уже зарегистрированы',
		duration: 5,
		placement: 'bottomRight'
	});
};
//Wishlist
export const toastProductAddToWishList = (title) => {
	notification.info({
		message: 'Вы успешно добавили товар в избранные',
		description: `Вы добавили товар под названием ${title} в ваши избранные`,
		duration: 5,
		placement: 'bottomRight'
	});
};

export const toastProductRemoveFromWishList = (title) => {
	notification.info({
		message: 'Вы успешно удалили товар из избранные',
		description: `Вы удалили товар под названием ${title} из ваших избранных`,
		duration: 5,
		placement: 'bottomRight'
	});
};

export const toastProductNotAddToWishList = () => {
	notification.warning({
		message: 'Данный товар уже есть в вашем списке избранных',
		duration: 5,
		placement: 'bottomRight'
	});
};

//Cart
export const toastProductAddToCart = (title) => {
	notification.info({
		message: 'Вы успешно добавили товар в корзину',
		description: `Вы добавили товар под названием ${title} в вашу корзину`,
		duration: 5,
		placement: 'bottomRight'
	});
};

export const toastProductRemoveFromCart = (title) => {
	notification.info({
		message: 'Вы успешно удалили товар из корзину',
		description: `Вы удалили товар под названием ${title} из вашей корзины`,
		duration: 5,
		placement: 'bottomRight'
	});
};

//Status 200
export const toastAuthorizationSuccess = () => {
	notification.success({
		message: 'Вы успешно вошли в систему',
		duration: 5,
		placement: 'bottomRight'
	});
};

export const toastRegistrationSuccess = () => {
	notification.success({
		message: 'Вы успешно зарегистрировались, пожалуйста подтвердите свою почту через письмо которое мы отправили',
		duration: 6000,
		placement: 'bottomRight'
	});
};

export const toastBuySuccess = () => {
	notification.success({
		message: 'Вы успешно создали заказ',
		duration: 5,
		placement: 'bottomRight'
	});
};

export const toastEditSuccess = () => {
	notification.success({
		message: 'Вы успешно изменили свой данные',
		duration: 5,
		placement: 'bottomRight'
	});
};
