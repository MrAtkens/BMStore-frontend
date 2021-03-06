const withPWA = require('next-pwa');
const withPlugins = require('next-compose-plugins');
const withFonts = require('next-fonts');
const path = require('path');

const nextConfig = withPWA({
	images: {
		domains: ['tacs-bucker.s3.eu-central-1.amazonaws.com'],
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
	compress: true,
	staticPageGenerationTimeout: 180,
	experimental: {
		outputStandalone: true
	},
	httpAgentOptions: {
		keepAlive: false,
		proxy: {
			protocol: 'https',
			host: 'https://tacs.kz',
			port: 443
		}
	}
});

module.exports = withPlugins([[withFonts], nextConfig]);
