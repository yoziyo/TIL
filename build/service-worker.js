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
    "revision": "b8dc774dbee423058674d987bf7b0962"
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
    "url": "assets/js/11.c7c62f66.js",
    "revision": "7598e1389cf23640d6f2126cc4622ccb"
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
    "url": "assets/js/6.0fb2ede8.js",
    "revision": "0e14f127e31317b14a5486039a526cac"
  },
  {
    "url": "assets/js/7.7e681ff5.js",
    "revision": "18213da9a1eaee22fcc01edc43d09795"
  },
  {
    "url": "assets/js/8.dcc85b64.js",
    "revision": "3e4bda003c48b9f7f52e318f6a246d59"
  },
  {
    "url": "assets/js/9.a533e73f.js",
    "revision": "56178c372460b09035d2f439a98b1529"
  },
  {
    "url": "assets/js/app.25ec964e.js",
    "revision": "ec75db842cfb295094af64a6db6c3429"
  },
  {
    "url": "database/mysql-foreign-key-error.html",
    "revision": "736905089cdc1790d66aa3913a4277d0"
  },
  {
    "url": "database/mysql-foreign-key.html",
    "revision": "71dd3993682ce99006fee6c9b3c37eb2"
  },
  {
    "url": "git/git-cherry-pick.html",
    "revision": "d72b38d98a483ad109814a7ea2da59f7"
  },
  {
    "url": "git/git-ignore-not-use.html",
    "revision": "03f0a76a79c8c88519496f8ecccf9fcc"
  },
  {
    "url": "index.html",
    "revision": "c1bb909807f9a19b2e8c0866db22826a"
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
    "revision": "db9eda7f041b091add59eca095002a26"
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
