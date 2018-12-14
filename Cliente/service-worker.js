var cacheName = 'misascensoris-v2';
var filesToCache = [
  '/',
  '/index.html',
  '/listado.html',
  '/orden.html',
  '/login.html',
  '/css/carrusel.css',
  '/css/main.css',
  '/css/menu.css',
  '/css/formulario.css',
  '/img/carrusel1.png',
  '/img/carrusel2.png',
  '/img/carrusel3.png',
  '/img/icono-elevador100.png',
  '/img/todoslosdias-200.png',
  '/js/app.js',
  '/js/carrusel.js',
  '/js/api.js',
  '/js/apipost2.js',
  'js/login.js',
  'js/logout.js',
  'js/usuarioLogueado.js',
  'js/orden.js'
];

self.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

self.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});


self.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});
