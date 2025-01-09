'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "710b25404a0b87fc5e008646e528cb7b",
"assets/AssetManifest.bin.json": "0dec30112f598bfb271ce8506899ca76",
"assets/AssetManifest.json": "5f234902310c63953c743ea85199ed90",
"assets/assets/brand/brand-01.svg": "2dd59410e0a65ce7183c0edb82d51cec",
"assets/assets/brand/brand-02.svg": "1cd9b0680cbfb78805420659bc1e077d",
"assets/assets/brand/brand-03.svg": "0eca25adef3e8225d50860ec9e935082",
"assets/assets/brand/brand-04.svg": "7dc6ac3b2da4adea0f941e472486a4bc",
"assets/assets/brand/brand-05.svg": "3ebe4ebf55a7faa2aa74ce775c7340fb",
"assets/assets/brand/microsoft.svg": "a0013dd7be480f5bb3b44cd74d9d3ced",
"assets/assets/crm/accounts.svg": "47acb22858a2a1d9f97863873a6a795b",
"assets/assets/crm/airbnb.png": "2680e2dc83940c1c58e6fc9954aa5089",
"assets/assets/crm/arrow_down.svg": "bbe9b4cd5363997caa4f4640a4aef955",
"assets/assets/crm/arrow_down_red.svg": "98d64383b1138fa423c7fa9f2ba40c4d",
"assets/assets/crm/attach.svg": "03544a6b9b1fe35592efc1fd723b98b9",
"assets/assets/crm/avataraffwaw.png": "971d5773a1df10de92d9780c4f99cb67",
"assets/assets/crm/avatarshawn.png": "5a4eac16030efdcd4771d98bebec42dd",
"assets/assets/crm/avatartom.png": "214f40874e06f252ae63da52b1c2f0c1",
"assets/assets/crm/calendar.svg": "3f7be8d1e31e213027aa0e8b43ec8f37",
"assets/assets/crm/contactlist.json": "fd31d5093fab75a7c9dbce555ed9347a",
"assets/assets/crm/contactlistall.json": "40d43d559d44f01dd8a871ae3cb36cd1",
"assets/assets/crm/contacts.svg": "345d0a62b0880090f51f3e9e17f0f44b",
"assets/assets/crm/crm.png": "0c0806c464de6af08315cfb1a5d9d61c",
"assets/assets/crm/dashboard.svg": "e99935d7e212c0ed676f9668b5889ae0",
"assets/assets/crm/deals.svg": "309e5bad7ea16134b44fd20bde0a5d8d",
"assets/assets/crm/email.svg": "eedabc64887bea6bcea0a5609fdc7739",
"assets/assets/crm/first_name.svg": "5e7a9725457028940bb5293b696002ee",
"assets/assets/crm/github.svg": "9026004233ead74f983cafa7bdcac6a6",
"assets/assets/crm/home_address.svg": "7d5b45270527c20e2c73b7ed429e8f35",
"assets/assets/crm/hubspot.png": "ead3ab2e6f9d9351fee4e81b2e6bff37",
"assets/assets/crm/location.svg": "71a0c68830c1fcb6b67eacc9eca9dba5",
"assets/assets/crm/logo_light.svg": "5cd52b0a20ad77c34d36ad0df9ed5c8a",
"assets/assets/crm/mailchimp.png": "e16e086c332d187e6d3ac63b3903fe3e",
"assets/assets/crm/menu_route_ar.json": "12cdadb5e232227d50da43c917119c7a",
"assets/assets/crm/menu_route_en.json": "25b667ff5b1dd33d9071280f3a462d45",
"assets/assets/crm/moon.svg": "09439c3e65ad6d01fb9cb5c367c428f4",
"assets/assets/crm/reports.svg": "8df7267f0a20c95c31f16a8a2fd9625f",
"assets/assets/crm/setting.svg": "e94b02676f2b07e4acc5524f446bd385",
"assets/assets/crm/sun.svg": "09049d4bb2abba08cfd63891a7fb5ff4",
"assets/assets/crm/task.svg": "0e4f51c6bb3e5ca98ca35381427b9702",
"assets/assets/crm/task1.svg": "e72399878db63ed3495ee605b27ab7c4",
"assets/assets/crm/task2.svg": "4f6227397167633078b1eeee60eeff0c",
"assets/assets/crm/task3.svg": "f752cccba91dd29c7d80dfa97922308f",
"assets/assets/crm/tel.svg": "1eadd849d161f0d8a31f5daf61c07ded",
"assets/assets/crm/upload.svg": "e159b7f97ee045e427678d5b75de83f0",
"assets/assets/crm/user-02.png": "de3bd868997d3f445348922df73d8226",
"assets/assets/fonts/almarai-Bold.ttf": "1c7b8f3e50a7ca693dc27d3f1314167f",
"assets/assets/fonts/almarai-Regular.ttf": "4fcf563640cefe40b7474aec4f966c0a",
"assets/assets/signin/email.svg": "5e43e6afdbd3ea78b763a53054bce79f",
"assets/assets/signin/lock.svg": "3ad8a7c59c0398b00c91eb9b32aea729",
"assets/assets/signin/main.svg": "6773ba3c7b3754d799a96115f4531cd2",
"assets/assets/signin/signup.svg": "a53eaa0dc9565ee40c6f7a4a12b1eec9",
"assets/FontManifest.json": "f261eb982c9707cc99bd4cb48c870187",
"assets/fonts/MaterialIcons-Regular.otf": "264308b7f02c6599fabcb2e3e9a44c61",
"assets/NOTICES": "81b1ac3e98a37f86520956ab7f43b522",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_dropzone_web/assets/flutter_dropzone.js": "dddc5c70148f56609c3fb6b29929388e",
"assets/packages/syncfusion_flutter_datagrid/assets/font/FilterIcon.ttf": "b8e5e5bf2b490d3576a9562f24395532",
"assets/packages/syncfusion_flutter_datagrid/assets/font/UnsortIcon.ttf": "acdd567faa403388649e37ceb9adeb44",
"assets/packages/timezone/data/latest_all.tzf": "a3a6cb5d912b5375926e5b027f91cb00",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "5f0983c18a4aa3c27aa4f68f5cd05d55",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "35430c51ccfceed84273c29a5a5ef091",
"/": "35430c51ccfceed84273c29a5a5ef091",
"loading.gif": "b5302a7e6f55787961943f3c115f2480",
"main.dart.js": "4f4ce941a0becc50a92b518d2d250ec5",
"main.dart.js_1.part.js": "1a83f07af0b40d5592244621ae1c9cc9",
"main.dart.js_10.part.js": "c634766e40561701758f030e75c0b8d5",
"main.dart.js_11.part.js": "af264a446fe31425eeb2413c72d627bc",
"main.dart.js_13.part.js": "9db54866370c9850a5126563188c868b",
"main.dart.js_15.part.js": "ede2f588e2abf87bbaa41347c2b4dd53",
"main.dart.js_17.part.js": "5988675a3773387b14c46bfc9d36cf20",
"main.dart.js_19.part.js": "d07f0f2340e94cb21fe8a7df5b1ea7cd",
"main.dart.js_2.part.js": "1b215d8033f2e3f50263ad6578ee0df5",
"main.dart.js_20.part.js": "f0e437a71c99694446107669985a3342",
"main.dart.js_21.part.js": "060970d430665e5edd1db2bc8aaee096",
"main.dart.js_22.part.js": "db3d0055447e41d91765b01a41216943",
"main.dart.js_23.part.js": "89bafb2be9321d26c97b559225e38c22",
"main.dart.js_24.part.js": "c0276fbc71483822ffd09188acd1d315",
"main.dart.js_25.part.js": "a03532c535ae2b9627f1662acaa7918b",
"main.dart.js_26.part.js": "5eef7a32e25605dc24a57cda70871c01",
"main.dart.js_28.part.js": "01a48c1bf7160531396481c12d97c703",
"main.dart.js_29.part.js": "053323eed62337aacfcfe070ce2f73cb",
"main.dart.js_3.part.js": "932f572d31e0f89a140693f78387e1d1",
"main.dart.js_4.part.js": "9d8f9818475cc5d28540fb9b5839d582",
"main.dart.js_5.part.js": "a6545899a42d01402315b72f16f343e8",
"main.dart.js_6.part.js": "97d9ec73e35a9f2cd135f2f6b456dd05",
"main.dart.js_8.part.js": "53fc4714e968b58cf48b9e7bfc54e761",
"manifest.json": "73e4f5bfd4cd457f52b12cc0b14f1d59",
"version.json": "c7ae08e994214879894486dce0e89307"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
