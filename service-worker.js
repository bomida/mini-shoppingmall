
const CACHE_NAME = 'pwabuilder-page-v1';

// CODELAB : Add list of files to cache here.
const FILES_TO_CACHE = '/offline.html';

self.addEventListener('install', evt => {
  // CODELAB : Precache static resources here.
  evt.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log(`[ServiceWorker] Pre-caching offline page`);
      return cache.addAll(FILES_TO_CACHE);
    })
  );
});

self.addEventListener('activate', evt => {
  // CODELAB : Remove previous cached data from disk.
  evt.waitUntil(
    caches.keys().then((keyList) => {
      return Promise.all(keyList.map(key => {
        if (key !== CACHE_NAME) {
          console.log('[SerciveWorker] Removing old cache', key);
        }
      }));
    })
  );
});
