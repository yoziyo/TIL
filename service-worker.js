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
    "revision": "54e91d0d9105e26b0de769ea47891a29"
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
    "url": "assets/js/10.8d84082f.js",
    "revision": "0eac5d95366e97578245162424ef18e5"
  },
  {
    "url": "assets/js/11.86d3031a.js",
    "revision": "e62272b2062d2549c3533cf9348e72b7"
  },
  {
    "url": "assets/js/12.286dd0aa.js",
    "revision": "0d5b612960e8f0e466a96b7a37134ca8"
  },
  {
    "url": "assets/js/13.879e9c4a.js",
    "revision": "89c671ba89e61df8736d5126b16bdc95"
  },
  {
    "url": "assets/js/14.7899dd84.js",
    "revision": "fe328baa2039c669a6171cf842892e77"
  },
  {
    "url": "assets/js/15.3690ad85.js",
    "revision": "8969816f429acc487b45d958af05333d"
  },
  {
    "url": "assets/js/16.f6c3d3ac.js",
    "revision": "6f62048a4f32bfc8cd48c615ea51091d"
  },
  {
    "url": "assets/js/2.74751a5d.js",
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
    "url": "assets/js/5.d3e7edee.js",
    "revision": "65ee9c22c928b34fb7e191e32df1e1b2"
  },
  {
    "url": "assets/js/6.84f1e87f.js",
    "revision": "27230b2cc1d3ee9717a8ef82ef83214e"
  },
  {
    "url": "assets/js/7.7e681ff5.js",
    "revision": "18213da9a1eaee22fcc01edc43d09795"
  },
  {
    "url": "assets/js/8.e3206639.js",
    "revision": "e6e4cb66d940df0784701c3967c11067"
  },
  {
    "url": "assets/js/9.44881fc3.js",
    "revision": "a905e7a173676b1acfbba50d9fd0d98d"
  },
  {
    "url": "assets/js/app.a2b649c3.js",
    "revision": "0698a491294e7a241993a234e8797dc7"
  },
  {
    "url": "codewars/7kyu-categorize-new-member.html",
    "revision": "c4c733567bcdeb04e0289ea3f63311d8"
  },
  {
    "url": "codewars/7kyu-printer-errors.html",
    "revision": "a8cfc951b974e81dd3c398069cc961e3"
  },
  {
    "url": "codewars/8kyu-sum-of-positive.html",
    "revision": "7902ed5216f6811a71726fb99d78ef01"
  },
  {
    "url": "database/mysql-foreign-key-error.html",
    "revision": "96c8cdc9b57bf478c3cb83027277651c"
  },
  {
    "url": "database/mysql-foreign-key.html",
    "revision": "43beb1eb455606d6de6077818e7d24e7"
  },
  {
    "url": "git/git-cherry-pick.html",
    "revision": "883a9470de05676ecfbcb8d6bed225ec"
  },
  {
    "url": "git/git-ignore-not-use.html",
    "revision": "5d0fe626c4b9392a67b29dd470bf3abb"
  },
  {
    "url": "index.html",
    "revision": "0ded88dcdcb6899f7c85d29623082812"
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
    "revision": "1e5aa5373ef0c7a2748760f97717554c"
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
