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
    "revision": "67dbb50755d4df36b2102fd9a772b117"
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
    "url": "assets/js/10.f9a51128.js",
    "revision": "8148d26da4f71c284abe8f1294598bcf"
  },
  {
    "url": "assets/js/11.37c806b5.js",
    "revision": "39b0328a56ce201440f380fc0aa900c2"
  },
  {
    "url": "assets/js/12.c18454fb.js",
    "revision": "8860b0b1b7f0b9394d2744335e7e1263"
  },
  {
    "url": "assets/js/13.f94ca23c.js",
    "revision": "905f363c91ec0978692c9d2801e93bbb"
  },
  {
    "url": "assets/js/14.57821b53.js",
    "revision": "44bfbd39ff0be2a788b5cf2f7615b901"
  },
  {
    "url": "assets/js/15.32e06d1d.js",
    "revision": "92eb4d101bd44e481dfbd0af110fa080"
  },
  {
    "url": "assets/js/2.74751a5d.js",
    "revision": "f26d0e9c377f40f99f48b91c5743056e"
  },
  {
    "url": "assets/js/3.b8303c3d.js",
    "revision": "0b2c23db32de54b05b38e169818a1570"
  },
  {
    "url": "assets/js/4.b941cdac.js",
    "revision": "7ec59c4cc3d73c51d899d21554489e82"
  },
  {
    "url": "assets/js/5.1a970243.js",
    "revision": "e7354a605c543a71e9243445265d5fdd"
  },
  {
    "url": "assets/js/6.a8656494.js",
    "revision": "29e1428ff876e4409674c32cd843ddd0"
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
    "url": "assets/js/9.e3eee03b.js",
    "revision": "49dd399463f8f6ec7be18f193aff3246"
  },
  {
    "url": "assets/js/app.01712811.js",
    "revision": "37029e05e00c1bb1a55e2dd39fe790e2"
  },
  {
    "url": "codewars/7kyu-printer-errors.html",
    "revision": "65d94f3cb202d6ad184e505375e7ca4e"
  },
  {
    "url": "codewars/8kyu-sum-of-positive.html",
    "revision": "59149533aaad602d702bb0e517831152"
  },
  {
    "url": "database/mysql-foreign-key-error.html",
    "revision": "95b9179b98f7fad1bade831334da0285"
  },
  {
    "url": "database/mysql-foreign-key.html",
    "revision": "0507a7d4a9a088844a857724a758f00e"
  },
  {
    "url": "git/git-cherry-pick.html",
    "revision": "d37d2874626cfc5cc65948cf27cdf38b"
  },
  {
    "url": "git/git-ignore-not-use.html",
    "revision": "c41ff5d7847af1f1ba4cb4b44f031004"
  },
  {
    "url": "index.html",
    "revision": "a05ae0e3c0af4c629d5e1ca57a818aa2"
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
    "revision": "7e3bdd3d8536a006878b5555355df9dc"
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
