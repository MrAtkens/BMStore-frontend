if (!self.define) {
	let e,
		i = {};
	const c = (c, a) => (
		(c = new URL(c + '.js', a).href),
		i[c] ||
			new Promise((i) => {
				if ('document' in self) {
					const e = document.createElement('script');
					(e.src = c), (e.onload = i), document.head.appendChild(e);
				} else (e = c), importScripts(c), i();
			}).then(() => {
				let e = i[c];
				if (!e)
					throw new Error(`Module ${c} didn’t register its module`);
				return e;
			})
	);
	self.define = (a, s) => {
		const t =
			e ||
			('document' in self ? document.currentScript.src : '') ||
			location.href;
		if (i[t]) return;
		let r = {};
		const o = (e) => c(e, t),
			n = { module: { uri: t }, exports: r, require: o };
		i[t] = Promise.all(a.map((e) => n[e] || o(e))).then(
			(e) => (s(...e), r)
		);
	};
}
define(['./workbox-83b819bb'], function (e) {
	'use strict';
	importScripts(),
		self.skipWaiting(),
		e.clientsClaim(),
		e.precacheAndRoute(
			[
				{
					url: '/_next/server/middleware-manifest.json',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/1Tr_18XeU7R0XLiemUYn2/_buildManifest.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/1Tr_18XeU7R0XLiemUYn2/_middlewareManifest.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/1Tr_18XeU7R0XLiemUYn2/_ssgManifest.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/chunks/566-5a040c7db4558c7f.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/chunks/596-f63567c2423d904b.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/chunks/602-8d05c1bcc3ecc4f3.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/chunks/61-19ae6cb01b2ec8a0.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/chunks/651.e7ad805f32a091cd.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/chunks/66-23982e41bd00fe4f.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/chunks/662-d84f37e9776a7a9b.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/chunks/667-40ee2c21315006ab.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/chunks/849-d0e0f82f60f551b3.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/chunks/859-df729a3faf71d847.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/chunks/897-f6f41e7cc7e9c508.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/chunks/945-1a69584094cc787e.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/chunks/framework-91d7f78b5b4003c8.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/chunks/main-5bc508fc9c82f394.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/chunks/pages/404-ef0540c4be1ee7ec.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/chunks/pages/_app-e2eafc6803ea2d91.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/chunks/pages/_error-9734db4c9fd59614.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/chunks/pages/account/cart-676b7303d6d52311.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/chunks/pages/account/checkout-6149ff97cd7ed6c0.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/chunks/pages/account/login-c94028ff43432221.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/chunks/pages/account/registration-3cd338c1da12bcdb.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/chunks/pages/account/user-d629b1c7c361007f.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/chunks/pages/contacts-e47b56c47c156284.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/chunks/pages/index-d7e3e11d75dcb437.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/chunks/pages/orders-c270aa438d8257b4.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/chunks/pages/product/%5Bpid%5D-704d3035ee17cce2.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/chunks/pages/shop-66b179adb77632db.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/chunks/pages/wishlist-8dd6215eb841966d.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/chunks/polyfills-5cd94c89d3acac5f.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/chunks/webpack-732a3231898685b1.js',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/css/0568304a919cee55.css',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/media/Linearicons.3fc92b40.ttf',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/media/fontawesome-webfont.263ad4e5.woff2',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/media/fontawesome-webfont.4d710636.svg',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/media/fontawesome-webfont.be578d11.ttf',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/media/fontawesome-webfont.f0bc7f41.eot',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/_next/static/media/fontawesome-webfont.f9f5fef4.woff',
					revision: '1Tr_18XeU7R0XLiemUYn2'
				},
				{
					url: '/favicon.ico',
					revision: '1152b61fb67a893c5dc43e584ca0aeee'
				},
				{
					url: '/manifest.json',
					revision: '9556bfb8ca5f70b7cfddfc7df63016a2'
				},
				{
					url: '/static/css/bootstrap.min.css',
					revision: '1a5e2c5cdd1960a23b48dc9e49f06dca'
				},
				{
					url: '/static/css/slick.min.css',
					revision: '08f7d86150fd5f1e3a5357a02ce8e821'
				},
				{
					url: '/static/fonts/Linearicons/Font/Linearicons.ttf',
					revision: 'f6e2e9c30040079ab5b2bdc94f0a3289'
				},
				{
					url: '/static/fonts/Linearicons/Font/demo-files/demo.css',
					revision: '8973e33ba5f9ce435556bcf77379f01e'
				},
				{
					url: '/static/fonts/font-awesome/css/font-awesome.css',
					revision: '208bb9f61b1465560ca721ba4e27d636'
				},
				{
					url: '/static/fonts/font-awesome/css/font-awesome.css.map',
					revision: '8d57a9642cf62d824132266202eac56a'
				},
				{
					url: '/static/fonts/font-awesome/css/font-awesome.min.css',
					revision: '22b5e538556403a8be950ac48743d201'
				},
				{
					url: '/static/fonts/font-awesome/fonts/FontAwesome.otf',
					revision: '5dc41d8fe329a22fa1ee9225571c843e'
				},
				{
					url: '/static/fonts/font-awesome/fonts/fontawesome-webfont.eot',
					revision: '25a32416abee198dd821b0b17a198a8f'
				},
				{
					url: '/static/fonts/font-awesome/fonts/fontawesome-webfont.svg',
					revision: 'd7c639084f684d66a1bc66855d193ed8'
				},
				{
					url: '/static/fonts/font-awesome/fonts/fontawesome-webfont.ttf',
					revision: '1dc35d25e61d819a9c357074014867ab'
				},
				{
					url: '/static/fonts/font-awesome/fonts/fontawesome-webfont.woff',
					revision: 'c8ddf1e5e5bf3682bc7bebf30f394148'
				},
				{
					url: '/static/fonts/font-awesome/fonts/fontawesome-webfont.woff2',
					revision: 'e6cf7c6ec7c2d6f670ae9d762604cb0b'
				},
				{
					url: '/static/icons/android-icon-144x144.png',
					revision: 'e54f5cc81e8ca0d6f79936b86a7b796a'
				},
				{
					url: '/static/icons/android-icon-192x192.png',
					revision: '989d17270c604b5da396eae131dc9c01'
				},
				{
					url: '/static/icons/android-icon-36x36.png',
					revision: '0824950ee461724a4cfbb0b933ba3c64'
				},
				{
					url: '/static/icons/android-icon-48x48.png',
					revision: 'c53ec6e15a2c0f66cbe04afdf7ebba65'
				},
				{
					url: '/static/icons/android-icon-512x512.png',
					revision: 'b9b2a5396847a541b5c2c39319dfa2dc'
				},
				{
					url: '/static/icons/android-icon-72x72.png',
					revision: 'a95ba07fc4da6cfee2162c56fb94dc41'
				},
				{
					url: '/static/icons/android-icon-96x96.png',
					revision: '02413831c7ff98baeec11dc795f82df0'
				},
				{
					url: '/static/icons/apple-icon-114x114.png',
					revision: '771815b7dd5fc42cc9a2f62bd2aa4e7f'
				},
				{
					url: '/static/icons/apple-icon-120x120.png',
					revision: '9d7a376ebbce77f85be3caa31960f7ff'
				},
				{
					url: '/static/icons/apple-icon-144x144.png',
					revision: 'e54f5cc81e8ca0d6f79936b86a7b796a'
				},
				{
					url: '/static/icons/apple-icon-152x152.png',
					revision: '43b2cacfea59a3bcbc82c28226851c3d'
				},
				{
					url: '/static/icons/apple-icon-180x180.png',
					revision: '58951f1b1b6a6b30ada740554e88557a'
				},
				{
					url: '/static/icons/apple-icon-57x57.png',
					revision: '700a65ebea4dee869f0ad2a0e5fad20a'
				},
				{
					url: '/static/icons/apple-icon-60x60.png',
					revision: 'c896015534ef3025c0a92bf0762b1e9a'
				},
				{
					url: '/static/icons/apple-icon-72x72.png',
					revision: 'a95ba07fc4da6cfee2162c56fb94dc41'
				},
				{
					url: '/static/icons/apple-icon-76x76.png',
					revision: '8c43f2767e2a5b127620d71fc1eb3dc0'
				},
				{
					url: '/static/icons/apple-icon-precomposed.png',
					revision: '7bae9a185a718d3d3f9b14185d508afd'
				},
				{
					url: '/static/icons/apple-icon.png',
					revision: '7bae9a185a718d3d3f9b14185d508afd'
				},
				{
					url: '/static/icons/browserconfig.xml',
					revision: '653d077300a12f09a69caeea7a8947f8'
				},
				{
					url: '/static/icons/favicon-16x16.png',
					revision: 'cd6248359d54a60943e4984ed8734cb0'
				},
				{
					url: '/static/icons/favicon-32x32.png',
					revision: 'fed01bbf2c042bdc00a10cc9e816b2a5'
				},
				{
					url: '/static/icons/favicon-96x96.png',
					revision: '02413831c7ff98baeec11dc795f82df0'
				},
				{
					url: '/static/icons/master.svg',
					revision: '9c79d2b5aee21957f0dea11c687c3f97'
				},
				{
					url: '/static/icons/masterCard.svg',
					revision: 'bef34a4706813373869d1c70f857a115'
				},
				{
					url: '/static/icons/ms-icon-144x144.png',
					revision: 'e54f5cc81e8ca0d6f79936b86a7b796a'
				},
				{
					url: '/static/icons/ms-icon-150x150.png',
					revision: 'cf5c0c31ab554e3eb5248fd3ae459486'
				},
				{
					url: '/static/icons/ms-icon-310x310.png',
					revision: '0fdccfbe0f9428ae30dba911e0e5700a'
				},
				{
					url: '/static/icons/ms-icon-70x70.png',
					revision: '87ce8c9b5eab3ab59b8fbf537cb45f29'
				},
				{
					url: '/static/icons/paypal.svg',
					revision: 'd6afd9775919054f635954e6073aade1'
				},
				{
					url: '/static/icons/qiwi.svg',
					revision: 'bebfdecf55cdc00b2138443f826632ce'
				},
				{
					url: '/static/icons/visa.svg',
					revision: '8c3a0bfaf79b9329d16f2514355496be'
				},
				{
					url: '/static/icons/yandex.svg',
					revision: '4c4a08e387be0e517f45014760554933'
				},
				{
					url: '/static/img/404.jpg',
					revision: 'c9751e321bc2262b30e480ea99f76f25'
				},
				{
					url: '/static/img/ads/product-ads.png',
					revision: 'e55872726ef2c1a3b943aac274fd5d68'
				},
				{
					url: '/static/img/app-store.png',
					revision: '93415ba7176d7925b08b38382193ecb7'
				},
				{
					url: '/static/img/app.png',
					revision: '0d4269bb83912d30b4db3a29d4f77d9b'
				},
				{
					url: '/static/img/awards/1.png',
					revision: 'e72d9ac8d1ed3f00a420eb388f4205c3'
				},
				{
					url: '/static/img/awards/2.png',
					revision: '538f6665b30172526e3c89b87669b285'
				},
				{
					url: '/static/img/awards/3.png',
					revision: '79ebc44718daf028e804ed02abc82bd5'
				},
				{
					url: '/static/img/awards/4.png',
					revision: '866589ba6f7ad55301087fca7d3fa8d1'
				},
				{
					url: '/static/img/awards/5.png',
					revision: '3c0a9117f51be4f30c73e82ba187c499'
				},
				{
					url: '/static/img/bg/about-us.jpg',
					revision: '9bd1114654b43be6fb5757913297ef23'
				},
				{
					url: '/static/img/bg/blog-detail.jpg',
					revision: '447ea6c52ebc41f61f514350ff901564'
				},
				{
					url: '/static/img/bg/header-kid.svg',
					revision: '4b300f2e16a032129f13c5a17fabc027'
				},
				{
					url: '/static/img/bg/home-kids-promotion.jpg',
					revision: '593ef2cd37042db50bc4319f75f14b5d'
				},
				{
					url: '/static/img/bg/home-kids.jpg',
					revision: '7a504e2d47ae7b2569797eb712d884ae'
				},
				{
					url: '/static/img/bg/milestone.jpg',
					revision: '591342e2d3b7776b1127429e54697be4'
				},
				{
					url: '/static/img/bg/subscribe.jpg',
					revision: '1ebef2728f1cc9e91c0fdef75f6d0069'
				},
				{
					url: '/static/img/bg/testimonial-organic.jpg',
					revision: '08c027146090098608e28846b44d0ea9'
				},
				{
					url: '/static/img/bg/vendor.jpg',
					revision: '88ac30cb88bb4ff3f71c735db5a9f831'
				},
				{
					url: '/static/img/categories/1.jpg',
					revision: '2ce1d5177bad860688245245c7ae590f'
				},
				{
					url: '/static/img/categories/2.jpg',
					revision: 'c920612eb9d44a7aebfd8e47fb8eb34e'
				},
				{
					url: '/static/img/categories/3.jpg',
					revision: '4dd1f5e5243101f1ccb8701763611c80'
				},
				{
					url: '/static/img/categories/4.jpg',
					revision: '1c054cccd2fdf8d513021101885f52e0'
				},
				{
					url: '/static/img/categories/5.jpg',
					revision: 'cf8950636cbe91c3f6cc973cff937672'
				},
				{
					url: '/static/img/categories/6.jpg',
					revision: 'c7fe10e77ab7a06f5d777c8e43ca2dc7'
				},
				{
					url: '/static/img/categories/7.jpg',
					revision: '8e65d3d3e4446e335dbd1087bbd27c04'
				},
				{
					url: '/static/img/categories/8.jpg',
					revision: '24a3c9f5f6c629081423a26cf7f7293c'
				},
				{
					url: '/static/img/categories/clothing/1.jpg',
					revision: '05f89f5c5ed1198fa7dd028c601de153'
				},
				{
					url: '/static/img/categories/clothing/2.jpg',
					revision: '2474a4c56e12badfa9dc19ad9a31684a'
				},
				{
					url: '/static/img/categories/clothing/3.jpg',
					revision: '78531af03fdec7fad65782f840285a2f'
				},
				{
					url: '/static/img/categories/clothing/4.jpg',
					revision: 'ee27b994b953965f7d073f765dca9979'
				},
				{
					url: '/static/img/categories/clothing/5.jpg',
					revision: '91b044332a7b71d777a3ea36b2b6da48'
				},
				{
					url: '/static/img/categories/clothing/6.jpg',
					revision: 'eed0d29584aac0224e79f6d118e4d6f6'
				},
				{
					url: '/static/img/categories/clothing/7.jpg',
					revision: 'ac963abf39ee764e299044130996d2e1'
				},
				{
					url: '/static/img/categories/clothing/large.jpg',
					revision: 'b05ff54c2472bff35d093868d8e7d0a5'
				},
				{
					url: '/static/img/categories/electronic/1.jpg',
					revision: 'fb47862496cd3ef226ec98c4c0cb8056'
				},
				{
					url: '/static/img/categories/electronic/2.jpg',
					revision: 'f5831ca20074918f016816042146f085'
				},
				{
					url: '/static/img/categories/electronic/3.jpg',
					revision: '45ab67decb269e0e584c43b16bdd4ec0'
				},
				{
					url: '/static/img/categories/electronic/4.jpg',
					revision: 'ec6d8bc7efb003f0cebaebe78d054fee'
				},
				{
					url: '/static/img/categories/electronic/5.jpg',
					revision: '1eaffa05d78a8eee755ec852405192b9'
				},
				{
					url: '/static/img/categories/electronic/6.jpg',
					revision: 'bb2213376c3b0830ecdce4e3d9e56a1e'
				},
				{
					url: '/static/img/categories/electronic/7.jpg',
					revision: 'f533622a400593553c23631da6a42c61'
				},
				{
					url: '/static/img/categories/electronic/8.jpg',
					revision: '9d1e4086b9ca57307cb4a0e67490e419'
				},
				{
					url: '/static/img/categories/electronic/large.jpg',
					revision: 'b7493adfe2da558a13259d7bfe52f485'
				},
				{
					url: '/static/img/categories/furniture/1.png',
					revision: 'df1d859462b11790a0ccc078bb03742d'
				},
				{
					url: '/static/img/categories/furniture/10.png',
					revision: '87c3f8991e1e4dc70662e400f0f9744f'
				},
				{
					url: '/static/img/categories/furniture/11.png',
					revision: '763d21cf2ea9eabb93185032a8af0962'
				},
				{
					url: '/static/img/categories/furniture/12.png',
					revision: 'dbd6987bd0a4b668db6d09bd313424d3'
				},
				{
					url: '/static/img/categories/furniture/2.png',
					revision: 'fef7b839fe6211b92b58ef0eacf07a16'
				},
				{
					url: '/static/img/categories/furniture/3.png',
					revision: '60d9ddecc23eddc68dbcbe5b066f1311'
				},
				{
					url: '/static/img/categories/furniture/4.png',
					revision: '1605568d43e57e83111112aded7b79b5'
				},
				{
					url: '/static/img/categories/furniture/5.png',
					revision: '1a2bfce4b63f286080c6c2b8dc8c1542'
				},
				{
					url: '/static/img/categories/furniture/6.png',
					revision: 'cfcd03817481989c466356328064c5cc'
				},
				{
					url: '/static/img/categories/furniture/7.png',
					revision: '41afe58cbd2c62ac4cd1b23a6cb59611'
				},
				{
					url: '/static/img/categories/furniture/8.png',
					revision: '7db1b8d9b18a5ad048cb005a00c0d813'
				},
				{
					url: '/static/img/categories/furniture/9.png',
					revision: '572c59b684889d30b377edfc4a9ada84'
				},
				{
					url: '/static/img/categories/furniture/room-1.png',
					revision: 'ab442d77b476f91d75d5d9acb0acb9da'
				},
				{
					url: '/static/img/categories/furniture/room-2.png',
					revision: '108245cf92fec4d9c9459fb030166db5'
				},
				{
					url: '/static/img/categories/furniture/room-3.png',
					revision: '0260a4d80b89e937bceecc928a1571b7'
				},
				{
					url: '/static/img/categories/furniture/room-4.png',
					revision: 'fcf9d99c2e77f5dbb9d0a22493ba0ed7'
				},
				{
					url: '/static/img/categories/furniture/room-5.png',
					revision: 'd4307d4d6a20dbb951a15a52882a3cb0'
				},
				{
					url: '/static/img/categories/furniture/room-6.png',
					revision: '17c34b37528b9d6629deb4e1f9c87095'
				},
				{
					url: '/static/img/categories/furniture/room-7.png',
					revision: '5505addbbe0a7b84e1f612d780b11410'
				},
				{
					url: '/static/img/categories/furniture/room-8.png',
					revision: '12d24d79ffb36c8326aff0186a1e6e1e'
				},
				{
					url: '/static/img/categories/home-2/1.jpg',
					revision: 'ef2d6c5db007a2887e0b4588cd4a4c53'
				},
				{
					url: '/static/img/categories/home-2/2.jpg',
					revision: '7b22ed934e484c00153e2585f6a56d77'
				},
				{
					url: '/static/img/categories/home-2/3.jpg',
					revision: 'b5f8a0a68bf7e67cc94d51ccaf3b43fe'
				},
				{
					url: '/static/img/categories/home-2/4.jpg',
					revision: '96e65ecc866f83d1e0b5c35427050366'
				},
				{
					url: '/static/img/categories/home-2/5.jpg',
					revision: 'eab023f0d1ce9d4f85684f58a001baa7'
				},
				{
					url: '/static/img/categories/home-2/6.jpg',
					revision: 'f6a5f5c5c4f626f16aa192243a46f5b0'
				},
				{
					url: '/static/img/categories/home-5/1.jpg',
					revision: '07e0025675811301416386f745a8f11d'
				},
				{
					url: '/static/img/categories/home-5/10.jpg',
					revision: 'c499db6f3ae7ae6e352509924b426669'
				},
				{
					url: '/static/img/categories/home-5/11.jpg',
					revision: 'b97dc21a30013ea02dc7050b59058050'
				},
				{
					url: '/static/img/categories/home-5/12.jpg',
					revision: 'af01ba4ebf834e46dc346cb69d5c5173'
				},
				{
					url: '/static/img/categories/home-5/13.jpg',
					revision: 'dd2e7d727c35efae964f6bb19b07c524'
				},
				{
					url: '/static/img/categories/home-5/14.jpg',
					revision: '6a6fdcc7c34548809619bb0638ecd6cd'
				},
				{
					url: '/static/img/categories/home-5/15.jpg',
					revision: '4598bbf2d3214488162966f157510956'
				},
				{
					url: '/static/img/categories/home-5/16.jpg',
					revision: 'a08060b2a9b55c4beffecf5da64385ba'
				},
				{
					url: '/static/img/categories/home-5/2.jpg',
					revision: '92408c34966e3a4ea8831c3b9c194bcf'
				},
				{
					url: '/static/img/categories/home-5/3.jpg',
					revision: 'de307a86cd223873a0d9d2e4294fcd13'
				},
				{
					url: '/static/img/categories/home-5/4.jpg',
					revision: '2f3d8b1eda8a7640eda432398a8392bd'
				},
				{
					url: '/static/img/categories/home-5/5.jpg',
					revision: 'b6e704e35a2dbb07a8a3fb7a908e796f'
				},
				{
					url: '/static/img/categories/home-5/6.jpg',
					revision: '8ebf0c7090ee16fe8b0b697cb2648943'
				},
				{
					url: '/static/img/categories/home-5/7.jpg',
					revision: 'ff59cbe632625be4fcec84c40729498e'
				},
				{
					url: '/static/img/categories/home-5/8.jpg',
					revision: 'fdc186eb06389028b1eda9456d8dfc07'
				},
				{
					url: '/static/img/categories/home-5/9.jpg',
					revision: '179b8487ef90e75b76ea410a0523c53f'
				},
				{
					url: '/static/img/categories/kitchen/1.jpg',
					revision: '6feaecd22d94c062608c7f24376457bf'
				},
				{
					url: '/static/img/categories/kitchen/2.jpg',
					revision: '1cc8aa1ebcc3721841e3efcfe34e44fd'
				},
				{
					url: '/static/img/categories/kitchen/3.jpg',
					revision: '05f00fbfc92a575f98b527790612d990'
				},
				{
					url: '/static/img/categories/kitchen/4.jpg',
					revision: '6cfdab881bd7965c93cfd805896959ab'
				},
				{
					url: '/static/img/categories/kitchen/5.jpg',
					revision: '6126026394c596a30ae75b6fa50c18e5'
				},
				{
					url: '/static/img/categories/kitchen/6.jpg',
					revision: 'd3176c46bc41b6e4f494ca37749ca24e'
				},
				{
					url: '/static/img/categories/kitchen/7.jpg',
					revision: '0186a0aa896801655fd4aad04d60e067'
				},
				{
					url: '/static/img/categories/kitchen/large.jpg',
					revision: 'd839a441ad8256e5821f008563367a48'
				},
				{
					url: '/static/img/categories/organic/1.jpg',
					revision: 'f7db7ec1508e05b37feb1a07af600029'
				},
				{
					url: '/static/img/categories/organic/2.jpg',
					revision: '6e3591871f01fe77f67344d6bcd570d2'
				},
				{
					url: '/static/img/categories/organic/3.jpg',
					revision: '60ea84b257d182ab60abc0c948223455'
				},
				{
					url: '/static/img/categories/organic/4.jpg',
					revision: '14d811aa3d0d842ad80a7d1198fa6bd9'
				},
				{
					url: '/static/img/categories/organic/5.jpg',
					revision: 'c8b3ff2c27cbb7ccfccba285f2f885a7'
				},
				{
					url: '/static/img/categories/organic/6.jpg',
					revision: 'b72bf2624234cc8516bdfb7e57666b67'
				},
				{
					url: '/static/img/categories/shop/1.jpg',
					revision: 'aae0f7e1543fa143547010cd9b8c87cb'
				},
				{
					url: '/static/img/categories/shop/10.jpg',
					revision: 'cf8950636cbe91c3f6cc973cff937672'
				},
				{
					url: '/static/img/categories/shop/2.jpg',
					revision: '6feaecd22d94c062608c7f24376457bf'
				},
				{
					url: '/static/img/categories/shop/3.jpg',
					revision: 'ec6d8bc7efb003f0cebaebe78d054fee'
				},
				{
					url: '/static/img/categories/shop/4.jpg',
					revision: '8bfd92f35f0cb22f79d1556ec3b7ffce'
				},
				{
					url: '/static/img/categories/shop/5.jpg',
					revision: 'df9202deda4cbc2591be9df1e346f6f0'
				},
				{
					url: '/static/img/categories/shop/6.jpg',
					revision: '647bbcd5f681afce4da1286ea048af60'
				},
				{
					url: '/static/img/categories/shop/7.jpg',
					revision: 'bd05303bab8f6165401d9c60ae2fdabf'
				},
				{
					url: '/static/img/categories/shop/8.jpg',
					revision: '78531af03fdec7fad65782f840285a2f'
				},
				{
					url: '/static/img/categories/shop/9.jpg',
					revision: 'bd7b24050c82e358e7fd95500058e51d'
				},
				{
					url: '/static/img/categories/technology/1.jpg',
					revision: '8000b4e230817c17d8a09e37e4ee492d'
				},
				{
					url: '/static/img/categories/technology/2.jpg',
					revision: '005510fa0ee5d2ce8f47d51961709f5e'
				},
				{
					url: '/static/img/categories/technology/3.jpg',
					revision: '336b7f027d5728e19a68bffa5bd6b562'
				},
				{
					url: '/static/img/categories/technology/4.jpg',
					revision: '751449de6cb39d562151f687cff6eb1f'
				},
				{
					url: '/static/img/categories/technology/5.jpg',
					revision: '751449de6cb39d562151f687cff6eb1f'
				},
				{
					url: '/static/img/categories/technology/6.jpg',
					revision: '32dc9405a18bcd84a7e6da1e5af547b0'
				},
				{
					url: '/static/img/collection/home-1/1.jpg',
					revision: '46c07c2bf2e45f4003eab9d9f931378c'
				},
				{
					url: '/static/img/collection/home-1/2.jpg',
					revision: '533dffccb54bbcf98c19042cd352ddc1'
				},
				{
					url: '/static/img/collection/home-1/3.jpg',
					revision: '1e9602dbfc9b14469f2c7435431d207d'
				},
				{
					url: '/static/img/collection/home-1/4a.jpg',
					revision: 'c1257bf7fc062d3d607b40b2a1a6485b'
				},
				{
					url: '/static/img/collection/home-1/4c.jpg',
					revision: '6f132ade05d2208a8c1924a2583e562c'
				},
				{
					url: '/static/img/collection/home-1/5a.jpg',
					revision: '9008bff1a67aab528f3c6c83dac8240a'
				},
				{
					url: '/static/img/collection/home-1/ad-1.jpg',
					revision: 'f602a3d13b16dbc99f94ed2f753d9d41'
				},
				{
					url: '/static/img/collection/home-1/ad-2.jpg',
					revision: 'ea1ce9f060fb14136c59bcecf32b13ae'
				},
				{
					url: '/static/img/collection/home-1/app.png',
					revision: '0d4269bb83912d30b4db3a29d4f77d9b'
				},
				{
					url: '/static/img/coming-soon-logo.png',
					revision: 'de3ff212d0a8282876fd35246d4c2b63'
				},
				{
					url: '/static/img/coming-soon.jpg',
					revision: '47b8cb85d918647582543f6226addc71'
				},
				{
					url: '/static/img/favi.png',
					revision: 'bdaf97cd6a3353dbc7cfe1da759cbd67'
				},
				{
					url: '/static/img/flag/en.png',
					revision: '6582fb0579ae56e24f461a58e074c9d6'
				},
				{
					url: '/static/img/flag/fr.png',
					revision: 'd99b27571f1e3d0d389b5c990a38ed0e'
				},
				{
					url: '/static/img/flag/germany.png',
					revision: '1fc5aedda52aee531f10970a8ac03fab'
				},
				{
					url: '/static/img/google-play.png',
					revision: '1b2cf25cd73e3480a6d0c716315e0ba0'
				},
				{
					url: '/static/img/icons/vendor-1.png',
					revision: '01f9094f0bac6aa3bff22ff4202a159f'
				},
				{
					url: '/static/img/icons/vendor-2.png',
					revision: '3b6f371ec7cdf425fa7a1be70f2753f1'
				},
				{
					url: '/static/img/icons/vendor-3.png',
					revision: '5d770039bd31c538d947c57f6650a3da'
				},
				{
					url: '/static/img/icons/vendor-4.png',
					revision: '4b10be3dfaab52e24744e4c268754ec1'
				},
				{
					url: '/static/img/instagram/1.jpg',
					revision: '452c06d728dd17789e107e77b94aa474'
				},
				{
					url: '/static/img/instagram/10.jpg',
					revision: '5a39e5ff1b72d017c6b4446449800b50'
				},
				{
					url: '/static/img/instagram/2.jpg',
					revision: 'de87fddc80f6ca8cd8307d39fdd73155'
				},
				{
					url: '/static/img/instagram/3.jpg',
					revision: 'bc3c28d39ed7b0529ec50e6bd7da9ec6'
				},
				{
					url: '/static/img/instagram/4.jpg',
					revision: 'f53734d0dc03628da8440d3bbcb16a78'
				},
				{
					url: '/static/img/instagram/5.jpg',
					revision: '358b9a9c9e40e64204103528c4c4f651'
				},
				{
					url: '/static/img/instagram/6.jpg',
					revision: '2b0407937b3b3ebf4e92a9753f994358'
				},
				{
					url: '/static/img/instagram/7.jpg',
					revision: 'a83bf2ce2f68e7698c4c6e7d82fff96f'
				},
				{
					url: '/static/img/instagram/8.jpg',
					revision: '495344a420c03aa60847cd622e07a0fd'
				},
				{
					url: '/static/img/instagram/9.jpg',
					revision: '5103347ebe189dbcc69db85415525515'
				},
				{
					url: '/static/img/logo.png',
					revision: 'd692d682e80d65761b9ff99e98391d19'
				},
				{
					url: '/static/img/logo.svg',
					revision: 'ec24e72a4f5a3a5067bc54736e6164c0'
				},
				{
					url: '/static/img/logo_light.png',
					revision: 'dfc60aca5e19911ce57c289889a1a76d'
				},
				{
					url: '/static/img/marker.png',
					revision: '18c8cfc8f06855ba103b0f717d18f254'
				},
				{
					url: '/static/img/not-found.jpg',
					revision: '963df17d83ea1279c3b25ff264253521'
				},
				{
					url: '/static/img/payment-method/1.jpg',
					revision: '68da1815a06bc4e5b5ea730aa5e3e7e0'
				},
				{
					url: '/static/img/payment-method/2.jpg',
					revision: 'd9a5a59214b21f5856adec9289c2a37d'
				},
				{
					url: '/static/img/payment-method/3.jpg',
					revision: '7e23a32f447631f65e43bae9d3479bc2'
				},
				{
					url: '/static/img/payment-method/4.jpg',
					revision: 'bdc5d4dd0cf413bc30b894ddc67812e8'
				},
				{
					url: '/static/img/payment-method/5.jpg',
					revision: '6577f6e830637b4fbb5ad48e4a3ddfef'
				},
				{
					url: '/static/img/payment-method/6.jpg',
					revision: '2c11a537a2bda49417d26ebf355c780d'
				},
				{
					url: '/static/img/products/description.jpg',
					revision: 'b08e1efd6f56d39b3217fe0954a91f4b'
				},
				{
					url: '/static/img/promotions/header-promotion.jpg',
					revision: '25836ace78a7a9d60203c1c5c8b3a1cf'
				},
				{
					url: '/static/img/promotions/home-10/1.jpg',
					revision: '3361e5eec32c4703ae500d814e3d6788'
				},
				{
					url: '/static/img/promotions/home-10/2.jpg',
					revision: '8c6536f992d2d2d245d62dcd9381417d'
				},
				{
					url: '/static/img/promotions/home-2-1.jpg',
					revision: '57f173d5ba17a076d6d69e6809478be7'
				},
				{
					url: '/static/img/promotions/home-2-2.jpg',
					revision: '9a84d9ccc2251e720fc376fe788bb333'
				},
				{
					url: '/static/img/promotions/home-2-3.jpg',
					revision: '69f4fb7a0a6f8c75bc974bfa4ff451d6'
				},
				{
					url: '/static/img/promotions/home-3-1.jpg',
					revision: '3c2eca9dd5cdf534be418c1940e338e7'
				},
				{
					url: '/static/img/promotions/home-3-2.jpg',
					revision: '3997bfe30c63ef9d92444f7a3d1098ba'
				},
				{
					url: '/static/img/promotions/home-3-3.jpg',
					revision: 'a13a4c0d742ecc7edb6ec5aff4f113e8'
				},
				{
					url: '/static/img/promotions/home-4-1.jpg',
					revision: 'f252c8026188765244bb60d5e5723370'
				},
				{
					url: '/static/img/promotions/home-5/clothing-1.jpg',
					revision: '824e182e3799b466acf2c387e18f930a'
				},
				{
					url: '/static/img/promotions/home-5/clothing-2.jpg',
					revision: '00a4c819f6f0edc012058cfd042b1f8c'
				},
				{
					url: '/static/img/promotions/home-5/electronic-1.jpg',
					revision: '0caf8891a80bcfd8dd65d65a692ffd03'
				},
				{
					url: '/static/img/promotions/home-5/electronic-2.jpg',
					revision: 'e70d66934b6951b6b054e0f893c6e051'
				},
				{
					url: '/static/img/promotions/home-5/kitchen-1.jpg',
					revision: '4bec44db69e5e13299f57b6615ed4820'
				},
				{
					url: '/static/img/promotions/home-5/kitchen-2.jpg',
					revision: '10b2839df631ba8b50e64cf0280b9d9d'
				},
				{
					url: '/static/img/promotions/home-5/simple.jpg',
					revision: '2abb514735d5e71836c59af892d766cc'
				},
				{
					url: '/static/img/promotions/home-6/1.jpg',
					revision: 'a62fa2fd824a960ee3b7490582c8a9e0'
				},
				{
					url: '/static/img/promotions/home-6/2.jpg',
					revision: '3d1f82444e6b925791678cb7ceb86eeb'
				},
				{
					url: '/static/img/promotions/home-7/1.jpg',
					revision: 'd48e13e933934f2e3566c6058d989331'
				},
				{
					url: '/static/img/promotions/home-7/2.jpg',
					revision: 'c9669f4cb0b6904d0a1411ae9cb8d912'
				},
				{
					url: '/static/img/promotions/home-7/3.jpg',
					revision: '91472fa96da2838dcd60f39bace7018b'
				},
				{
					url: '/static/img/promotions/home-8/1.jpg',
					revision: '641ea80e81a1dc4a16a2840543d76756'
				},
				{
					url: '/static/img/promotions/home-8/2.jpg',
					revision: '94b93e7b98e951d606a57b8879ea52c7'
				},
				{
					url: '/static/img/promotions/home-8/3.jpg',
					revision: '76e6a376c0c752f8a8e67eed6941925b'
				},
				{
					url: '/static/img/promotions/home-9/1.jpg',
					revision: '6fc095b98b26dce9c65f699519195f26'
				},
				{
					url: '/static/img/promotions/home-9/2.jpg',
					revision: '97beccfd35d49d439f5b37ac02601cdf'
				},
				{
					url: '/static/img/slider/home-5/1.jpg',
					revision: 'be588d7e65c1900eb7b872161ec9ef80'
				},
				{
					url: '/static/img/slider/home-5/2.jpg',
					revision: 'fcf9bfb5ddf70d32ff5098c0ad59f479'
				},
				{
					url: '/static/img/slider/home-5/3.jpg',
					revision: 'f850bc1a180e261cd234e13174e78fb9'
				},
				{
					url: '/static/img/slider/home-5/promotion-1.jpg',
					revision: 'c1f51ee8034dfac796d06e6386d00432'
				},
				{
					url: '/static/img/slider/home-5/promotion-2.jpg',
					revision: 'b8478aaea5dbe2cbf67826e65095ccae'
				},
				{
					url: '/static/img/slider/home-5/promotion-3.jpg',
					revision: 'e23826bfd165bbf179a1c0fdaeaf19b2'
				},
				{
					url: '/static/img/slider/home-5/promotion-4.jpg',
					revision: '4fed6c8df505c514bf4ccd7f0063e0fe'
				},
				{
					url: '/static/img/slider/home-5/promotion-5.jpg',
					revision: '4c90970aaaf7f81162ba90641a137d0d'
				},
				{
					url: '/static/img/slider/home-5/promotion-6.jpg',
					revision: 'fb95bb263f5bca1af61289f838d3c219'
				},
				{
					url: '/static/img/slider/shop-carousel/1.jpg',
					revision: '17ed901255dce403f52c6ab3ef446abc'
				},
				{
					url: '/static/img/slider/shop-carousel/2.jpg',
					revision: 'd1bd0e9de3b934436d3caace8b4c6ca2'
				},
				{
					url: '/static/img/slider/shop-default/1.jpg',
					revision: '9972a241c8c75f10a187f744973cf6a9'
				},
				{
					url: '/static/img/slider/shop-default/2.jpg',
					revision: '3ef816933219c21139cc693ea4f937d6'
				},
				{
					url: '/static/img/slider/shop-sidebar/1.jpg',
					revision: '366bfa6ff0fa39eac1c9105a2b2b3bfb'
				},
				{
					url: '/static/img/slider/shop-sidebar/2.jpg',
					revision: 'ae481ec8ad7e211e0af4d1c85826e712'
				},
				{
					url: '/static/img/users/1.jpg',
					revision: 'bba5286f6f52a68a2821461eb34c69cd'
				},
				{
					url: '/static/img/users/1.png',
					revision: '16f84840b947155da801d2c0d3735e27'
				},
				{
					url: '/static/img/users/2.png',
					revision: 'c119e5676c91f9a949f69b39ade97c1c'
				},
				{
					url: '/static/img/users/3.jpg',
					revision: 'acd60c2388819472e51cc0a9921c3837'
				},
				{
					url: '/static/img/users/our-team/1.jpg',
					revision: '486f0aee7dd6bedf100222943299fc62'
				},
				{
					url: '/static/img/users/our-team/2.jpg',
					revision: 'e917da4664ea3a5d098045853af2cd5a'
				},
				{
					url: '/static/img/users/our-team/3.jpg',
					revision: '04a522ce0818e86ce07769b6a980f8d9'
				},
				{
					url: '/static/img/users/our-team/4.jpg',
					revision: '7c85e6771af82332f28cfc59b1a0454d'
				},
				{
					url: '/static/img/users/our-team/5.jpg',
					revision: '6ff992f3740d7a4a854b57afa6320c88'
				},
				{
					url: '/static/img/users/our-team/6.jpg',
					revision: '645f85cffb30b2b3fd9f8b050575f4b0'
				},
				{
					url: '/static/img/users/our-team/7.jpg',
					revision: 'e4f6007d74e9f8c96a93f9fe554149bd'
				},
				{
					url: '/static/img/vendor/milestone-1.png',
					revision: '8de35199193f70fa113e3064da07c7df'
				},
				{
					url: '/static/img/vendor/milestone-2.png',
					revision: 'dd46527c7af6be169631c8de88772bfb'
				},
				{
					url: '/static/img/vendor/milestone-3.png',
					revision: '1794d5f2a8d95539010aa33688ddfc97'
				},
				{
					url: '/static/img/vendor/milestone-4.png',
					revision: '091bd858ffa52a2097b331b0b358c585'
				},
				{
					url: '/static/img/vendor/store/1.jpg',
					revision: '2496e5d17df4c22f612ebf8242bd39cc'
				},
				{
					url: '/static/img/vendor/store/2.jpg',
					revision: '2911367bbe03e99871d10c3e2efb63da'
				},
				{
					url: '/static/img/vendor/store/3.jpg',
					revision: '76873da125477e0d11348e3ee38f4254'
				},
				{
					url: '/static/img/vendor/store/default-store-banner.png',
					revision: 'aec882a1e9ba0a0654df5a517c572fad'
				},
				{
					url: '/static/img/vendor/store/default_banner.jpg',
					revision: 'eda9ae18e2c70a6c0f8168355dfc0338'
				},
				{
					url: '/static/img/vendor/store/user/1.jpeg',
					revision: 'f24917dee99fedbf06f9887a399c42d0'
				},
				{
					url: '/static/img/vendor/store/user/2.jpg',
					revision: '20820734944db2de82be416a2331aa1c'
				},
				{
					url: '/static/img/vendor/store/user/3.jpg',
					revision: 'f710f9ceceb30a500247eb70cd72e95b'
				},
				{
					url: '/static/img/vendor/store/user/4.jpg',
					revision: '5aaaca485a9adedd47ca043851f40fe3'
				},
				{
					url: '/static/img/vendor/store/user/5.jpg',
					revision: 'e63050856f5829a828f56fc7c9118327'
				},
				{
					url: '/static/img/vendor/store/vendor-150x150.jpg',
					revision: '3cda301d0d46d9daeb3df219b74b7340'
				},
				{
					url: '/static/img/vendor/vendor-store.jpg',
					revision: '1b50e1ee83a6fce5e941b48f7927ec0f'
				},
				{
					url: '/vercel.svg',
					revision: '4b4f1876502eb6721764637fe5c41702'
				}
			],
			{ ignoreURLParametersMatching: [] }
		),
		e.cleanupOutdatedCaches(),
		e.registerRoute(
			'/',
			new e.NetworkFirst({
				cacheName: 'start-url',
				plugins: [
					{
						cacheWillUpdate: async ({
							request: e,
							response: i,
							event: c,
							state: a
						}) =>
							i && 'opaqueredirect' === i.type
								? new Response(i.body, {
										status: 200,
										statusText: 'OK',
										headers: i.headers
								  })
								: i
					}
				]
			}),
			'GET'
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,
			new e.CacheFirst({
				cacheName: 'google-fonts-webfonts',
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 4,
						maxAgeSeconds: 31536e3
					})
				]
			}),
			'GET'
		),
		e.registerRoute(
			/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,
			new e.StaleWhileRevalidate({
				cacheName: 'google-fonts-stylesheets',
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 4,
						maxAgeSeconds: 604800
					})
				]
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-font-assets',
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 4,
						maxAgeSeconds: 604800
					})
				]
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-image-assets',
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 64,
						maxAgeSeconds: 86400
					})
				]
			}),
			'GET'
		),
		e.registerRoute(
			/\/_next\/image\?url=.+$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'next-image',
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 64,
						maxAgeSeconds: 86400
					})
				]
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:mp3|mp4)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-media-assets',
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 32,
						maxAgeSeconds: 86400
					})
				]
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:js)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-js-assets',
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 32,
						maxAgeSeconds: 86400
					})
				]
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:css|less)$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'static-style-assets',
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 32,
						maxAgeSeconds: 86400
					})
				]
			}),
			'GET'
		),
		e.registerRoute(
			/\/_next\/data\/.+\/.+\.json$/i,
			new e.StaleWhileRevalidate({
				cacheName: 'next-data',
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 32,
						maxAgeSeconds: 86400
					})
				]
			}),
			'GET'
		),
		e.registerRoute(
			/\.(?:json|xml|csv)$/i,
			new e.NetworkFirst({
				cacheName: 'static-data-assets',
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 32,
						maxAgeSeconds: 86400
					})
				]
			}),
			'GET'
		),
		e.registerRoute(
			({ url: e }) => {
				if (!(self.origin === e.origin)) return !1;
				const i = e.pathname;
				return !i.startsWith('/api/auth/') && !!i.startsWith('/api/');
			},
			new e.NetworkFirst({
				cacheName: 'apis',
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 16,
						maxAgeSeconds: 86400
					})
				]
			}),
			'GET'
		),
		e.registerRoute(
			({ url: e }) => {
				if (!(self.origin === e.origin)) return !1;
				return !e.pathname.startsWith('/api/');
			},
			new e.NetworkFirst({
				cacheName: 'others',
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 32,
						maxAgeSeconds: 86400
					})
				]
			}),
			'GET'
		),
		e.registerRoute(
			({ url: e }) => !(self.origin === e.origin),
			new e.NetworkFirst({
				cacheName: 'cross-origin',
				networkTimeoutSeconds: 10,
				plugins: [
					new e.ExpirationPlugin({
						maxEntries: 32,
						maxAgeSeconds: 3600
					})
				]
			}),
			'GET'
		);
});
