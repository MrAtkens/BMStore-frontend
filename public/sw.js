if(!self.define){let e,i={};const s=(s,c)=>(s=new URL(s+".js",c).href,i[s]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=s,e.onload=i,document.head.appendChild(e)}else e=s,importScripts(s),i()})).then((()=>{let e=i[s];if(!e)throw new Error(`Module ${s} didn’t register its module`);return e})));self.define=(c,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let a={};const o=e=>s(e,t),r={module:{uri:t},exports:a,require:o};i[t]=Promise.all(c.map((e=>r[e]||o(e)))).then((e=>(n(...e),a)))}}define(["./workbox-75794ccf"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/XzzK0vIuzFF0_NllivhzE/_buildManifest.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/XzzK0vIuzFF0_NllivhzE/_middlewareManifest.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/XzzK0vIuzFF0_NllivhzE/_ssgManifest.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/100-5edb998e9d8ce10f.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/221-8f16d15748f240e5.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/247-d56780add8fefb80.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/406-66997df09a84e066.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/489-5db519d4794bf8fb.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/560-503ef51ab0b30649.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/66-8fd8d9ed0c89f535.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/700-e8f3e3f8dc644b3c.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/783-59a5db36132fb46b.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/852-ea78004ec9a8e756.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/859-df729a3faf71d847.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/878-bf91c01cea6aaf27.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/894.9047cda612e8fce0.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/945-87272274a85e5160.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/993-21b3acd87ec15652.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/framework-5f4595e5518b5600.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/main-acc468b0fcd9ac51.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/pages/404-907299e11159fa45.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/pages/_app-36b99df8267172d6.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/pages/_error-427958541d1e32b7.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/pages/about-ed9e4cd8a220af8f.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/pages/accept-c3a2d136f7a27c3f.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/pages/account/address-32b3843aa681f959.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/pages/account/cart-987d3517a961f3a9.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/pages/account/checkout-fa83a5b64765c67c.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/pages/account/invoices-006766158e9a1fd7.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/pages/account/login-c8238c3c22f1f99c.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/pages/account/orders-bdcd5203f9546929.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/pages/account/penalties-507059cd7f816273.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/pages/account/registration-f5023675b8465e32.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/pages/account/reset-9acddae543511959.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/pages/account/reset-password-78a3c6630fa9a47c.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/pages/account/user-bac10dd101926cff.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/pages/contacts-4a74c81e78de769a.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/pages/index-e9370bb670939985.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/pages/product/%5Bpid%5D-f611beb0cffa71fc.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/pages/shop-b1a62ca85f676b42.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/pages/wishlist-81db8ef7737f0648.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/chunks/webpack-51e5f9d314c148d7.js",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/css/03e2e5e355b926b1.css",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/media/Linearicons.3fc92b40.ttf",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/media/fontawesome-webfont.139c0f14.svg",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/media/fontawesome-webfont.263ad4e5.woff2",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/media/fontawesome-webfont.be578d11.ttf",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/media/fontawesome-webfont.f0bc7f41.eot",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/_next/static/media/fontawesome-webfont.f9f5fef4.woff",revision:"XzzK0vIuzFF0_NllivhzE"},{url:"/favicon.ico",revision:"931ae8c7e54ed7fcad6424f66d8c9b6c"},{url:"/manifest.json",revision:"192db14d942dc3a189ee7dedb121ba86"},{url:"/static/css/bootstrap.min.css",revision:"a85e51adf46aedefc4251a564bfc00fa"},{url:"/static/css/slick.min.css",revision:"08f7d86150fd5f1e3a5357a02ce8e821"},{url:"/static/fonts/Linearicons/Font/Linearicons.ttf",revision:"f6e2e9c30040079ab5b2bdc94f0a3289"},{url:"/static/fonts/Linearicons/Font/demo-files/demo.css",revision:"117e6a69a56b5ea94a1a167d2eb33fa9"},{url:"/static/fonts/font-awesome/css/font-awesome.min.css",revision:"03a54083f7d2b2e06a402aee0abe3881"},{url:"/static/fonts/font-awesome/fonts/FontAwesome.otf",revision:"5dc41d8fe329a22fa1ee9225571c843e"},{url:"/static/fonts/font-awesome/fonts/fontawesome-webfont.eot",revision:"25a32416abee198dd821b0b17a198a8f"},{url:"/static/fonts/font-awesome/fonts/fontawesome-webfont.svg",revision:"24c601e721ebd8279d38e2cfa0d01bc6"},{url:"/static/fonts/font-awesome/fonts/fontawesome-webfont.ttf",revision:"1dc35d25e61d819a9c357074014867ab"},{url:"/static/fonts/font-awesome/fonts/fontawesome-webfont.woff",revision:"c8ddf1e5e5bf3682bc7bebf30f394148"},{url:"/static/fonts/font-awesome/fonts/fontawesome-webfont.woff2",revision:"e6cf7c6ec7c2d6f670ae9d762604cb0b"},{url:"/static/icons/android-icon-144x144.png",revision:"b0b1c27cfd4407ccff149bdafdc8ce8d"},{url:"/static/icons/android-icon-192x192.png",revision:"8ea7046e77693a493eee05b075be5cd5"},{url:"/static/icons/android-icon-36x36.png",revision:"c47b606efe9fc7e79bbcb0a13444dabf"},{url:"/static/icons/android-icon-48x48.png",revision:"1d1674576daae85eef8c07afdf7a6b8b"},{url:"/static/icons/android-icon-72x72.png",revision:"146e32e7f49409ba4c63f64849bc9014"},{url:"/static/icons/android-icon-96x96.png",revision:"670973b1d98f0a193d2828d3781b1278"},{url:"/static/icons/apple-icon-114x114.png",revision:"6d01e42b75b955a602311213130b746a"},{url:"/static/icons/apple-icon-120x120.png",revision:"826fde875e70e22e8cf5c2f8f5fff06e"},{url:"/static/icons/apple-icon-144x144.png",revision:"b0b1c27cfd4407ccff149bdafdc8ce8d"},{url:"/static/icons/apple-icon-152x152.png",revision:"bc93157084ab247ca4a14d0cdeb47e42"},{url:"/static/icons/apple-icon-180x180.png",revision:"cd2eba91dcbde181c4106b3b6a9f8314"},{url:"/static/icons/apple-icon-57x57.png",revision:"6e501906f079f4a35913728488b945ef"},{url:"/static/icons/apple-icon-60x60.png",revision:"2ff44cdcd262a5a5f316b0c5c3ca70bf"},{url:"/static/icons/apple-icon-72x72.png",revision:"146e32e7f49409ba4c63f64849bc9014"},{url:"/static/icons/apple-icon-76x76.png",revision:"24de7813d61fb183ec8898f44f5d9e49"},{url:"/static/icons/apple-icon-precomposed.png",revision:"3d061d6bc8e1cc3590d5e99211ba5886"},{url:"/static/icons/apple-icon.png",revision:"3d061d6bc8e1cc3590d5e99211ba5886"},{url:"/static/icons/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/static/icons/favicon-16x16.png",revision:"749e5404d06dd6d4de80909095a7e8af"},{url:"/static/icons/favicon-32x32.png",revision:"7a778e54901f78780d9f2607ab45af21"},{url:"/static/icons/favicon-96x96.png",revision:"670973b1d98f0a193d2828d3781b1278"},{url:"/static/icons/favicon.ico",revision:"931ae8c7e54ed7fcad6424f66d8c9b6c"},{url:"/static/icons/ms-icon-144x144.png",revision:"b0b1c27cfd4407ccff149bdafdc8ce8d"},{url:"/static/icons/ms-icon-150x150.png",revision:"ea6da3b37da5c8c5499d56f280b34c8a"},{url:"/static/icons/ms-icon-310x310.png",revision:"8364b6982a1882ac8b08ed8d500354d0"},{url:"/static/icons/ms-icon-70x70.png",revision:"811b72e26b012385ced6ae5d43095c97"},{url:"/static/img/404.webp",revision:"2e4b8e3bd1174d4c66b8ba2a3ca1fcd3"},{url:"/static/img/about/1.webp",revision:"e95ac4ec04532ab70887cc922f78473a"},{url:"/static/img/about/2.webp",revision:"eacb8f6fc4a227ad598c7c5b35025508"},{url:"/static/img/about/3.webp",revision:"94ccaee1d1b5c888ac2bf1c639508adb"},{url:"/static/img/about/4.webp",revision:"d65acafcf5f6980909bf6a86b343b7e5"},{url:"/static/img/about/5.webp",revision:"3eaa78ebcd79f52302fcb6871c05ed05"},{url:"/static/img/about/about-us.webp",revision:"02517103276548b5b73acdcf87c09b14"},{url:"/static/img/accept.webp",revision:"1e10bc26e5df841a4b029f8d98270fe8"},{url:"/static/img/logo.webp",revision:"b561f742b53811d900867de192a98c78"},{url:"/static/img/logo_light.webp",revision:"7d018a0ceafc81799a7d8f18e30ffbc9"},{url:"/static/img/marker.webp",revision:"2cf5cad4cb9bc1483d8d10eccffcc919"},{url:"/static/img/not-found.webp",revision:"53d488f573ebdd186a2f60102810e754"},{url:"/static/img/payment-method/1.webp",revision:"59f853ff77d169426faa01e2180a5d71"},{url:"/static/img/payment-method/2.webp",revision:"f711c1a9a0e18a634a060e67d237357b"},{url:"/static/img/payment-method/3.webp",revision:"69115047b2b1c01ae4ee64cb619d1255"},{url:"/static/img/promotions/promotion-1.webp",revision:"19132df146de91df97171c4d228a29ea"},{url:"/static/img/promotions/promotion-2.webp",revision:"3682e7895216acdabb91071bf532b122"},{url:"/static/img/promotions/simple.webp",revision:"32a1ef80b07357e83577bd0020b941c3"},{url:"/static/img/slider/1.webp",revision:"840be3f39461fbf5de2d8eebd858574b"},{url:"/static/img/slider/2.webp",revision:"f9d8a07f8d0f2da874801dd397840289"},{url:"/static/img/slider/3.webp",revision:"228fe268461640f1975b2bf20c1c86d7"},{url:"/static/img/slider/slide-1.webp",revision:"3ee97ec0b88528a3d110fac3f423ccbd"},{url:"/static/img/slider/slide-2.webp",revision:"d54ffe2868cdb4a56661fa2891c35c67"},{url:"/static/img/slider/slide-3.webp",revision:"0ab467afcc589dc1f9cc760823993f93"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:i,event:s,state:c})=>i&&"opaqueredirect"===i.type?new Response(i.body,{status:200,statusText:"OK",headers:i.headers}):i}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const i=e.pathname;return!i.startsWith("/api/auth/")&&!!i.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
