const CACHE_NAME = "simo-dian-prep-v3";

const PRECACHE_URLS = [
  "/",
  "/manifest.json",
  "/favicon.png",
  "/favicon.ico",
  "/og.png",
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(PRECACHE_URLS))
  );
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys.filter((key) => key !== CACHE_NAME).map((key) => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;

  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin) return;
  if (url.pathname.startsWith("/_next-live/")) return;

  const unsupportedSchemes = ["chrome-extension", "chrome", "moz-extension"];
  if (unsupportedSchemes.some((scheme) => url.protocol.startsWith(scheme))) {
    return;
  }

  event.respondWith(
    caches.match(event.request).then((cached) => {
      const fetchPromise = fetch(event.request)
        .then((response) => {
          if (response && response.status === 200 && response.type === "basic") {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              try {
                cache.put(event.request, clone);
              } catch (error) {
                console.warn("Failed to cache response:", error);
              }
            });
          }
          return response;
        })
        .catch(() => cached ?? Response.error());

      return cached ?? fetchPromise;
    })
  );
});
