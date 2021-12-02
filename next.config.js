const withPWA = require('next-pwa');
const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
const path = require('path')

const nextConfig = withPWA({
	images: {
		domains: ['cdn.icon-icons.com', 'image.freepik.com', 'cdn4.vectorstock.com', 'encrypted-tbn0.gstatic.com'],
		minimumCacheTTL: 60000,
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	env: {
		title: 'CATS',
		titleDescription: 'Магазин строй материалов',
	},
	pwa: {
		dest: 'public',
		register: true,
		skipWaiting: true
	},
	i18n: {
		// These are all the locales you want to support in
		// your application
		locales: ['ru'],
		// This is the default locale you want to be used when visiting
		// a non-locale prefixed path e.g. `/hello`
		defaultLocale: 'ru'
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')],
	},
})


module.exports = withPlugins(
	[[withFonts], nextConfig]
);
