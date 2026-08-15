// Minimal service worker - required for "Add to Home Screen" / installable PWA.
// Does not cache aggressively so the app always shows the latest content.

self.addEventListener("install", function (event) {
    self.skipWaiting();
});

self.addEventListener("activate", function (event) {
    self.clients.claim();
});

self.addEventListener("fetch", function (event) {
    event.respondWith(fetch(event.request));
});