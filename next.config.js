const withPWA = require('next-pwa');
const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
const path = require('path');

const nextConfig = withPWA({
	images: {
		domains: [
			'vg123-test.s3.eu-central-1.amazonaws.com',
			'cdn.icon-icons.com',
			'image.freepik.com',
			'cdn4.vectorstock.com',
			'encrypted-tbn0.gstatic.com',
			'thumbs.dreamstime.com',
			'images.unsplash.com',
		],
		minimumCacheTTL: 60000
	},
	eslint: {
		ignoreDuringBuilds: true
	},
	pwa: {
		dest: 'public',
		register: true,
		skipWaiting: true
	},
	i18n: {
		locales: ['ru'],
		defaultLocale: 'ru'
	},
	sassOptions: {
		includePaths: [path.join(__dirname, 'styles')]
	},
	compress: true
});

module.exports = withPlugins([[withFonts], nextConfig]);
