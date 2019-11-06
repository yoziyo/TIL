/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "a5eac1c0c1e6243d364fd1f2f8ec53a5"
  },
  {
    "url": "assets/css/0.styles.7170c6c2.css",
    "revision": "a92a24eece8b54c89eab0b76e25c8f0b"
  },
  {
    "url": "assets/img/1.79e33de4.png",
    "revision": "79e33de4eb9b2406cc491e9b06a56687"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.80108aa5.js",
    "revision": "e9e5f9e5303e01c8aca89baf9e3fd5dc"
  },
  {
    "url": "assets/js/11.27ee8a38.js",
    "revision": "4b651459521dc0664ebcf4a2d10341d6"
  },
  {
    "url": "assets/js/12.8dc767fc.js",
    "revision": "dc6d1d068e330bd389507ff34338da5c"
  },
  {
    "url": "assets/js/13.c891c86b.js",
    "revision": "10370a6f30810d1d5d4415afb96d988b"
  },
  {
    "url": "assets/js/2.531e386c.js",
    "revision": "f26d0e9c377f40f99f48b91c5743056e"
  },
  {
    "url": "assets/js/3.2f0df402.js",
    "revision": "2b64d5ff86df4a8dd2b1d70f68989315"
  },
  {
    "url": "assets/js/4.b941cdac.js",
    "revision": "7ec59c4cc3d73c51d899d21554489e82"
  },
  {
    "url": "assets/js/5.0e5dcb09.js",
    "revision": "f828e81341bac16a0379f1ee7ce285ea"
  },
  {
    "url": "assets/js/6.96267730.js",
    "revision": "6cf47e8842bce6af9ed538293c8649c6"
  },
  {
    "url": "assets/js/7.7e681ff5.js",
    "revision": "18213da9a1eaee22fcc01edc43d09795"
  },
  {
    "url": "assets/js/8.f25da390.js",
    "revision": "6853f685bf12e2769a9d1095e5fd9aa9"
  },
  {
    "url": "assets/js/9.b30b148d.js",
    "revision": "deef3bd70d092fdc67055fc4356e7ba7"
  },
  {
    "url": "assets/js/app.7afaf3cd.js",
    "revision": "fdbc3946bdd37f57732ddbeedcbe3a81"
  },
  {
    "url": "database/mysql-foreign-key-error.html",
    "revision": "d607b30f53eea3724eee8f6721739f15"
  },
  {
    "url": "database/mysql-foreign-key.html",
    "revision": "be1327ccb0729430000ab83fe07b4613"
  },
  {
    "url": "git/git-cherry-pick.html",
    "revision": "fed3eb6d05d41eaba422f5582980d2f9"
  },
  {
    "url": "git/git-ignore-not-use.html",
    "revision": "d25d09a364a4b08c349cb4c57d35c4e0"
  },
  {
    "url": "index.html",
    "revision": "b1ff3cb7ddbae103e8bc75a97c40dd7e"
  },
  {
    "url": "logo-144.png",
    "revision": "6d69269b0dcc1b8f7517fd8326b6b509"
  },
  {
    "url": "logo.png",
    "revision": "9d2497d05dd3641dfbb1ef3b79d57868"
  },
  {
    "url": "php/laravel-propel.html",
    "revision": "ff3c94349465fa0b774286aff8e38d44"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})
