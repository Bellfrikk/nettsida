// Installer service worker og legg filer i cache
self.addEventListener("install", event => {
  event.waitUntil(
    caches.open("app-cache").then(cache => 
      cache.addAll([
        "/",
        "/index.html",
      ])
    )
  );
});

// Server filer frå cache når mogleg
self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => 
      response || fetch(event.request)
    )
  );
});
