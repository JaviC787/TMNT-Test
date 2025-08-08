const cacheName = "tmnt-click-v1";
const assets = [
  "./",
  "./index.html",
  "./manifest.json",
  "./background.jpg",
  "./Donatello.png",
  "./Leonardo.png",
  "./Michaelangelo.png",
  "./Raphael.png",
  "./icon-192.png",
  "./icon-512.png"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
