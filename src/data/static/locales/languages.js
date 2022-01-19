import russianLocalization from './ru';
import englishLocalization from './en';
import kazakhLocalization from './kz';

export const languages = {
	ru: russianLocalization,
	en: englishLocalization,
	kz: kazakhLocalization
};

export const getLocale = (locale) => {
	if (locale === 'ru') return russianLocalization;
	else if (locale === 'en') return englishLocalization;
	else if (locale === 'kz') return kazakhLocalization;
};
