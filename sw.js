// NilAr Edu Center — Service Worker v3
const CACHE = 'nilar-v3';

// Köhnə cache-ləri sil
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    )
  );
});

// Cache etmə — həmişə şəbəkədən al
self.addEventListener('fetch', e => {
  e.respondWith(fetch(e.request).catch(() => caches.match(e.request)));
});
