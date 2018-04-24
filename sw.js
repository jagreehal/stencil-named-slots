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

importScripts("https://storage.googleapis.com/workbox-cdn/releases/3.1.0/workbox-sw.js");

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
    "revision": "f37b58b0a7e5d34ccec5e553b9023b1b"
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
    "url": "build/stencil-app/stencil-app.itadyxy5.js",
    "revision": "078d33670330af56626893c8efcb7404"
  },
  {
    "url": "build/stencil-app/stencil-app.rodf5a87.js",
    "revision": "26b1e9f8f5386e242de1428277442e86"
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
