if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,a)=>{const n=e||("document"in self?document.currentScript.src:"")||location.href;if(s[n])return;let t={};const o=e=>i(e,n),r={module:{uri:n},exports:t,require:o};s[n]=Promise.all(c.map((e=>r[e]||o(e)))).then((e=>(a(...e),t)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/chunks/246-bb5071408d383803.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/313-8272fb113c9139e9.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/519-4aad880ff27ccc63.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/566-1ca7624b4841eb64.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/61-0c48159f512eb712.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/651.aeabac0cb847692f.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/66-23982e41bd00fe4f.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/667-40717ec4df3979a9.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/843-1d41352aad8051f9.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/849-fedf0508421d6876.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/859-df729a3faf71d847.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/945-346c87f4b4796add.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/953-d5586ccafa8eb94e.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/main-84b4f2e65af75c84.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/pages/404-d2eab3de2f007163.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/pages/_app-5995c736da9c925a.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/pages/_error-f89c6942776a833e.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/pages/accept-24c7e813e6757872.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/pages/account/cart-1c4ef1280868ef57.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/pages/account/checkout-7c1b2dd1eb25884e.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/pages/account/login-de4f70851eaa6a05.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/pages/account/registration-5859c223d4d9d5ac.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/pages/account/reset-daaf2d0c7cb6f9f1.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/pages/account/user-bf74ffe972c67b2b.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/pages/index-23d140e3daf74757.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/pages/orders-69a483de2bd69fa4.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/pages/product/%5Bpid%5D-5126e16ce0280703.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/pages/shop-52af9c08054cc2c4.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/pages/wishlist-57ba3703521522fa.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/chunks/webpack-0eced5dbe880fd94.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/css/0a73e3c2a3b6e5e0.css",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/media/Linearicons.3fc92b40.ttf",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/media/fontawesome-webfont.139c0f14.svg",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/media/fontawesome-webfont.263ad4e5.woff2",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/media/fontawesome-webfont.be578d11.ttf",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/media/fontawesome-webfont.f0bc7f41.eot",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/media/fontawesome-webfont.f9f5fef4.woff",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/vfkw801KbZ5YDp9XlqQek/_buildManifest.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/vfkw801KbZ5YDp9XlqQek/_middlewareManifest.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/_next/static/vfkw801KbZ5YDp9XlqQek/_ssgManifest.js",revision:"vfkw801KbZ5YDp9XlqQek"},{url:"/favicon.ico",revision:"1152b61fb67a893c5dc43e584ca0aeee"},{url:"/manifest.json",revision:"d3448d904e3ded2579a77635113cf7b5"},{url:"/static/css/bootstrap.min.css",revision:"a85e51adf46aedefc4251a564bfc00fa"},{url:"/static/css/slick.min.css",revision:"08f7d86150fd5f1e3a5357a02ce8e821"},{url:"/static/fonts/Linearicons/Font/Linearicons.ttf",revision:"f6e2e9c30040079ab5b2bdc94f0a3289"},{url:"/static/fonts/Linearicons/Font/demo-files/demo.css",revision:"117e6a69a56b5ea94a1a167d2eb33fa9"},{url:"/static/fonts/font-awesome/css/font-awesome.min.css",revision:"03a54083f7d2b2e06a402aee0abe3881"},{url:"/static/fonts/font-awesome/fonts/FontAwesome.otf",revision:"5dc41d8fe329a22fa1ee9225571c843e"},{url:"/static/fonts/font-awesome/fonts/fontawesome-webfont.eot",revision:"25a32416abee198dd821b0b17a198a8f"},{url:"/static/fonts/font-awesome/fonts/fontawesome-webfont.svg",revision:"24c601e721ebd8279d38e2cfa0d01bc6"},{url:"/static/fonts/font-awesome/fonts/fontawesome-webfont.ttf",revision:"1dc35d25e61d819a9c357074014867ab"},{url:"/static/fonts/font-awesome/fonts/fontawesome-webfont.woff",revision:"c8ddf1e5e5bf3682bc7bebf30f394148"},{url:"/static/fonts/font-awesome/fonts/fontawesome-webfont.woff2",revision:"e6cf7c6ec7c2d6f670ae9d762604cb0b"},{url:"/static/icons/android-icon-144x144.png",revision:"e54f5cc81e8ca0d6f79936b86a7b796a"},{url:"/static/icons/android-icon-192x192.png",revision:"989d17270c604b5da396eae131dc9c01"},{url:"/static/icons/android-icon-36x36.png",revision:"0824950ee461724a4cfbb0b933ba3c64"},{url:"/static/icons/android-icon-48x48.png",revision:"c53ec6e15a2c0f66cbe04afdf7ebba65"},{url:"/static/icons/android-icon-512x512.png",revision:"b9b2a5396847a541b5c2c39319dfa2dc"},{url:"/static/icons/android-icon-72x72.png",revision:"a95ba07fc4da6cfee2162c56fb94dc41"},{url:"/static/icons/android-icon-96x96.png",revision:"02413831c7ff98baeec11dc795f82df0"},{url:"/static/icons/apple-icon-114x114.png",revision:"771815b7dd5fc42cc9a2f62bd2aa4e7f"},{url:"/static/icons/apple-icon-120x120.png",revision:"9d7a376ebbce77f85be3caa31960f7ff"},{url:"/static/icons/apple-icon-144x144.png",revision:"e54f5cc81e8ca0d6f79936b86a7b796a"},{url:"/static/icons/apple-icon-152x152.png",revision:"43b2cacfea59a3bcbc82c28226851c3d"},{url:"/static/icons/apple-icon-180x180.png",revision:"58951f1b1b6a6b30ada740554e88557a"},{url:"/static/icons/apple-icon-57x57.png",revision:"700a65ebea4dee869f0ad2a0e5fad20a"},{url:"/static/icons/apple-icon-60x60.png",revision:"c896015534ef3025c0a92bf0762b1e9a"},{url:"/static/icons/apple-icon-72x72.png",revision:"a95ba07fc4da6cfee2162c56fb94dc41"},{url:"/static/icons/apple-icon-76x76.png",revision:"8c43f2767e2a5b127620d71fc1eb3dc0"},{url:"/static/icons/apple-icon-precomposed.png",revision:"7bae9a185a718d3d3f9b14185d508afd"},{url:"/static/icons/apple-icon.png",revision:"7bae9a185a718d3d3f9b14185d508afd"},{url:"/static/icons/browserconfig.xml",revision:"97775b1fd3b6e6c13fc719c2c7dd0ffe"},{url:"/static/icons/favicon-16x16.png",revision:"cd6248359d54a60943e4984ed8734cb0"},{url:"/static/icons/favicon-32x32.png",revision:"fed01bbf2c042bdc00a10cc9e816b2a5"},{url:"/static/icons/favicon-96x96.png",revision:"02413831c7ff98baeec11dc795f82df0"},{url:"/static/icons/master.svg",revision:"9c79d2b5aee21957f0dea11c687c3f97"},{url:"/static/icons/masterCard.svg",revision:"bef34a4706813373869d1c70f857a115"},{url:"/static/icons/ms-icon-144x144.png",revision:"e54f5cc81e8ca0d6f79936b86a7b796a"},{url:"/static/icons/ms-icon-150x150.png",revision:"cf5c0c31ab554e3eb5248fd3ae459486"},{url:"/static/icons/ms-icon-310x310.png",revision:"0fdccfbe0f9428ae30dba911e0e5700a"},{url:"/static/icons/ms-icon-70x70.png",revision:"87ce8c9b5eab3ab59b8fbf537cb45f29"},{url:"/static/icons/paypal.svg",revision:"d6afd9775919054f635954e6073aade1"},{url:"/static/icons/qiwi.svg",revision:"bebfdecf55cdc00b2138443f826632ce"},{url:"/static/icons/visa.svg",revision:"8c3a0bfaf79b9329d16f2514355496be"},{url:"/static/icons/yandex.svg",revision:"4c4a08e387be0e517f45014760554933"},{url:"/static/img/404.webp",revision:"2e4b8e3bd1174d4c66b8ba2a3ca1fcd3"},{url:"/static/img/accept.webp",revision:"1eda102a40700851b99afb05ef9be631"},{url:"/static/img/favi.png",revision:"452508b7eacc29a2744bb4d68a7746be"},{url:"/static/img/logo.svg",revision:"25d3087e254d297a0de5a32a6f9846f6"},{url:"/static/img/logo.webp",revision:"38f6724a3b7c688662c57c26065f53f0"},{url:"/static/img/logo_light.webp",revision:"5cce73eb8283253b2d52aa60c24f3568"},{url:"/static/img/marker.webp",revision:"2cf5cad4cb9bc1483d8d10eccffcc919"},{url:"/static/img/not-found.webp",revision:"53d488f573ebdd186a2f60102810e754"},{url:"/static/img/payment-method/1.webp",revision:"224fd9312386f07cd83ce576045d09ea"},{url:"/static/img/payment-method/2.webp",revision:"e7571b5cf7bdf5f781e20ed7c4003aca"},{url:"/static/img/payment-method/3.webp",revision:"49ab7228d9769aa909619b71c56c5410"},{url:"/static/img/promotions/promotion-1.webp",revision:"476e5dc4baf3300016462c36dd6ebd71"},{url:"/static/img/promotions/promotion-2.webp",revision:"17557051cfdcab38089b2ca43350ee5a"},{url:"/static/img/promotions/simple.webp",revision:"2d458269039671e0145235021c5afa04"},{url:"/static/img/slider/1.jpg",revision:"be588d7e65c1900eb7b872161ec9ef80"},{url:"/static/img/slider/2.jpg",revision:"fcf9bfb5ddf70d32ff5098c0ad59f479"},{url:"/static/img/slider/3.jpg",revision:"f850bc1a180e261cd234e13174e78fb9"},{url:"/static/img/slider/slide-1.webp",revision:"b41ce4adc37f61df124087a1b4da8e99"},{url:"/static/img/slider/slide-2.webp",revision:"ca451206d8a64fcad5acd69fa0a1a0d1"},{url:"/static/img/slider/slide-3.webp",revision:"693f097e3481ad1b88687119be9137fc"},{url:"/vercel.svg",revision:"26bf2d0adaf1028a4d4c6ee77005e819"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
