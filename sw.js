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
 * See https://goo.gl/YYPcyY
 */

importScripts(
  "https://storage.googleapis.com/workbox-cdn/releases/3.0.0-alpha.6/workbox-sw.js"
);

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "assets/icon/favicon.ico",
    "revision": "d2f619d796fbe8bed6200da2691aa5b6"
  },
  {
    "url": "assets/icon/icon.png",
    "revision": "b96ad6e1e0b755c8cd45e6aec40bca25"
  },
  {
    "url": "build/stencil-app.js",
    "revision": "3b4bb77cedeedd8e8b33c9fa774ff4d3"
  },
  {
    "url": "build/stencil-app/k1rzrq7i.es5.js",
    "revision": "c4dfe0024810f542dacb3a980ff96761"
  },
  {
    "url": "build/stencil-app/k1rzrq7i.js",
    "revision": "89c21ad7d1802f0062fa55dfbcec1a9c"
  },
  {
    "url": "build/stencil-app/k1rzrq7i.sc.es5.js",
    "revision": "c4dfe0024810f542dacb3a980ff96761"
  },
  {
    "url": "build/stencil-app/k1rzrq7i.sc.js",
    "revision": "89c21ad7d1802f0062fa55dfbcec1a9c"
  },
  {
    "url": "build/stencil-app/stencil-app.njuzzz7n.js",
    "revision": "1a6e4c813ca62dcf147a9b352828d735"
  },
  {
    "url": "build/stencil-app/stencil-app.wkwkheta.js",
    "revision": "52eaf124282a5260497e2d31ffc8bded"
  },
  {
    "url": "index.html",
    "revision": "19cdb9fb0e103c993730e47f7d531f7b"
  },
  {
    "url": "manifest.json",
    "revision": "0c129721ede7cd25304ebdd238d774ad"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.suppressWarnings();
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
