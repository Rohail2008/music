// sw.js
self.addEventListener('install', e => {
  self.skipWaiting();
  e.waitUntil(
    caches.open('allplay-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/manifest.json',
        '/allplay-icon.png'
        // Add MP3s or other files you want cached
      ]);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(response => response || fetch(e.request))
  );
});
