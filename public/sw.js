if(!self.define){let e,s={};const i=(i,c)=>(i=new URL(i+".js",c).href,s[i]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=i,e.onload=s,document.head.appendChild(e)}else e=i,importScripts(i),s()})).then((()=>{let e=s[i];if(!e)throw new Error(`Module ${i} didn’t register its module`);return e})));self.define=(c,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(s[t])return;let a={};const o=e=>i(e,t),f={module:{uri:t},exports:a,require:o};s[t]=Promise.all(c.map((e=>f[e]||o(e)))).then((e=>(n(...e),a)))}}define(["./workbox-1846d813"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/static/DM3Oo18hdU0Zy87f_uAUx/_buildManifest.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/DM3Oo18hdU0Zy87f_uAUx/_middlewareManifest.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/DM3Oo18hdU0Zy87f_uAUx/_ssgManifest.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/100-e2f818b42bf4cba8.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/247-12852fe89eae0b07.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/489-f8430649ce32e7bc.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/568-7b4d2fbe11f32606.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/606-0c5998b80a24b752.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/635-c46cff4d4e846038.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/651.aeabac0cb847692f.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/66-23982e41bd00fe4f.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/667-15402e1f63f21038.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/832-45ecfdcdc70d332d.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/852-acf3f5b0dbc4260c.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/859-df729a3faf71d847.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/867-be5c715bae6c5f01.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/878-a427ccd9902cce10.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/945-c969b2d6307d4241.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/framework-91d7f78b5b4003c8.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/main-84b4f2e65af75c84.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/pages/404-73c49f36a5700447.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/pages/_app-d9b22079519146ac.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/pages/_error-f89c6942776a833e.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/pages/about-bf729267bed2218d.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/pages/accept-7ae02eeb9d580afc.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/pages/account/address-3b7845accc40d5c4.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/pages/account/cart-bcc883000299d6bc.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/pages/account/checkout-98517c6a643afc16.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/pages/account/invoices-4e6fb9b2be9da352.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/pages/account/login-e9f33f4ff545463a.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/pages/account/orders-2f1fd280a56d5d76.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/pages/account/penalties-f140b11bbf6fb691.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/pages/account/registration-ed06bbdf2fd54a02.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/pages/account/reset-1aafd47b112bb89f.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/pages/account/reset-password-8b49b9eb3fdd4952.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/pages/account/user-fea65edf3e91e222.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/pages/contacts-cf5464cf26a0bc63.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/pages/index-29dcf620e50df164.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/pages/product/%5Bpid%5D-48f90ad503658056.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/pages/shop-4d6a7e417d23dcb0.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/pages/wishlist-31f23940bc805fda.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/polyfills-5cd94c89d3acac5f.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/chunks/webpack-c49cdf371d9a435a.js",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/css/ff242b5cd9426118.css",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/media/Linearicons.3fc92b40.ttf",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/media/fontawesome-webfont.139c0f14.svg",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/media/fontawesome-webfont.263ad4e5.woff2",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/media/fontawesome-webfont.be578d11.ttf",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/media/fontawesome-webfont.f0bc7f41.eot",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/_next/static/media/fontawesome-webfont.f9f5fef4.woff",revision:"DM3Oo18hdU0Zy87f_uAUx"},{url:"/favicon.ico",revision:"931ae8c7e54ed7fcad6424f66d8c9b6c"},{url:"/manifest.json",revision:"192db14d942dc3a189ee7dedb121ba86"},{url:"/static/css/bootstrap.min.css",revision:"a85e51adf46aedefc4251a564bfc00fa"},{url:"/static/css/slick.min.css",revision:"08f7d86150fd5f1e3a5357a02ce8e821"},{url:"/static/fonts/Linearicons/Font/Linearicons.ttf",revision:"f6e2e9c30040079ab5b2bdc94f0a3289"},{url:"/static/fonts/Linearicons/Font/demo-files/demo.css",revision:"117e6a69a56b5ea94a1a167d2eb33fa9"},{url:"/static/fonts/font-awesome/css/font-awesome.min.css",revision:"03a54083f7d2b2e06a402aee0abe3881"},{url:"/static/fonts/font-awesome/fonts/FontAwesome.otf",revision:"5dc41d8fe329a22fa1ee9225571c843e"},{url:"/static/fonts/font-awesome/fonts/fontawesome-webfont.eot",revision:"25a32416abee198dd821b0b17a198a8f"},{url:"/static/fonts/font-awesome/fonts/fontawesome-webfont.svg",revision:"24c601e721ebd8279d38e2cfa0d01bc6"},{url:"/static/fonts/font-awesome/fonts/fontawesome-webfont.ttf",revision:"1dc35d25e61d819a9c357074014867ab"},{url:"/static/fonts/font-awesome/fonts/fontawesome-webfont.woff",revision:"c8ddf1e5e5bf3682bc7bebf30f394148"},{url:"/static/fonts/font-awesome/fonts/fontawesome-webfont.woff2",revision:"e6cf7c6ec7c2d6f670ae9d762604cb0b"},{url:"/static/icons/android-icon-144x144.png",revision:"b0b1c27cfd4407ccff149bdafdc8ce8d"},{url:"/static/icons/android-icon-192x192.png",revision:"8ea7046e77693a493eee05b075be5cd5"},{url:"/static/icons/android-icon-36x36.png",revision:"c47b606efe9fc7e79bbcb0a13444dabf"},{url:"/static/icons/android-icon-48x48.png",revision:"1d1674576daae85eef8c07afdf7a6b8b"},{url:"/static/icons/android-icon-72x72.png",revision:"146e32e7f49409ba4c63f64849bc9014"},{url:"/static/icons/android-icon-96x96.png",revision:"670973b1d98f0a193d2828d3781b1278"},{url:"/static/icons/apple-icon-114x114.png",revision:"6d01e42b75b955a602311213130b746a"},{url:"/static/icons/apple-icon-120x120.png",revision:"826fde875e70e22e8cf5c2f8f5fff06e"},{url:"/static/icons/apple-icon-144x144.png",revision:"b0b1c27cfd4407ccff149bdafdc8ce8d"},{url:"/static/icons/apple-icon-152x152.png",revision:"bc93157084ab247ca4a14d0cdeb47e42"},{url:"/static/icons/apple-icon-180x180.png",revision:"cd2eba91dcbde181c4106b3b6a9f8314"},{url:"/static/icons/apple-icon-57x57.png",revision:"6e501906f079f4a35913728488b945ef"},{url:"/static/icons/apple-icon-60x60.png",revision:"2ff44cdcd262a5a5f316b0c5c3ca70bf"},{url:"/static/icons/apple-icon-72x72.png",revision:"146e32e7f49409ba4c63f64849bc9014"},{url:"/static/icons/apple-icon-76x76.png",revision:"24de7813d61fb183ec8898f44f5d9e49"},{url:"/static/icons/apple-icon-precomposed.png",revision:"3d061d6bc8e1cc3590d5e99211ba5886"},{url:"/static/icons/apple-icon.png",revision:"3d061d6bc8e1cc3590d5e99211ba5886"},{url:"/static/icons/browserconfig.xml",revision:"653d077300a12f09a69caeea7a8947f8"},{url:"/static/icons/favicon-16x16.png",revision:"749e5404d06dd6d4de80909095a7e8af"},{url:"/static/icons/favicon-32x32.png",revision:"7a778e54901f78780d9f2607ab45af21"},{url:"/static/icons/favicon-96x96.png",revision:"670973b1d98f0a193d2828d3781b1278"},{url:"/static/icons/favicon.ico",revision:"931ae8c7e54ed7fcad6424f66d8c9b6c"},{url:"/static/icons/ms-icon-144x144.png",revision:"b0b1c27cfd4407ccff149bdafdc8ce8d"},{url:"/static/icons/ms-icon-150x150.png",revision:"ea6da3b37da5c8c5499d56f280b34c8a"},{url:"/static/icons/ms-icon-310x310.png",revision:"8364b6982a1882ac8b08ed8d500354d0"},{url:"/static/icons/ms-icon-70x70.png",revision:"811b72e26b012385ced6ae5d43095c97"},{url:"/static/img/404.webp",revision:"2e4b8e3bd1174d4c66b8ba2a3ca1fcd3"},{url:"/static/img/about/1.webp",revision:"e95ac4ec04532ab70887cc922f78473a"},{url:"/static/img/about/2.webp",revision:"eacb8f6fc4a227ad598c7c5b35025508"},{url:"/static/img/about/3.webp",revision:"94ccaee1d1b5c888ac2bf1c639508adb"},{url:"/static/img/about/4.webp",revision:"d65acafcf5f6980909bf6a86b343b7e5"},{url:"/static/img/about/5.webp",revision:"3eaa78ebcd79f52302fcb6871c05ed05"},{url:"/static/img/about/about-us.webp",revision:"02517103276548b5b73acdcf87c09b14"},{url:"/static/img/accept.webp",revision:"1e10bc26e5df841a4b029f8d98270fe8"},{url:"/static/img/logo.webp",revision:"b561f742b53811d900867de192a98c78"},{url:"/static/img/logo_light.webp",revision:"7d018a0ceafc81799a7d8f18e30ffbc9"},{url:"/static/img/marker.webp",revision:"2cf5cad4cb9bc1483d8d10eccffcc919"},{url:"/static/img/not-found.webp",revision:"53d488f573ebdd186a2f60102810e754"},{url:"/static/img/payment-method/1.webp",revision:"59f853ff77d169426faa01e2180a5d71"},{url:"/static/img/payment-method/2.webp",revision:"f711c1a9a0e18a634a060e67d237357b"},{url:"/static/img/payment-method/3.webp",revision:"69115047b2b1c01ae4ee64cb619d1255"},{url:"/static/img/promotions/promotion-1.webp",revision:"19132df146de91df97171c4d228a29ea"},{url:"/static/img/promotions/promotion-2.webp",revision:"3682e7895216acdabb91071bf532b122"},{url:"/static/img/promotions/simple.webp",revision:"32a1ef80b07357e83577bd0020b941c3"},{url:"/static/img/slider/1.webp",revision:"840be3f39461fbf5de2d8eebd858574b"},{url:"/static/img/slider/2.webp",revision:"f9d8a07f8d0f2da874801dd397840289"},{url:"/static/img/slider/3.webp",revision:"228fe268461640f1975b2bf20c1c86d7"},{url:"/static/img/slider/slide-1.webp",revision:"3ee97ec0b88528a3d110fac3f423ccbd"},{url:"/static/img/slider/slide-2.webp",revision:"d54ffe2868cdb4a56661fa2891c35c67"},{url:"/static/img/slider/slide-3.webp",revision:"0ab467afcc589dc1f9cc760823993f93"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:i,state:c})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
