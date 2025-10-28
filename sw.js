// Service Worker pro zachycení všech požadavků a přesměrování na cílovou doménu
const targetUrl = 'https://www.cfy.cz';

self.addEventListener('fetch', function(event) {
    // Zachycení všech požadavků (GET, POST, atd.) a přesměrování na cílovou URL
    event.respondWith(
        Response.redirect(targetUrl, 301)
    );
});

// Registrace service workeru
self.addEventListener('install', function(event) {
    console.log('Service Worker nainstalován');
    self.skipWaiting();
});

self.addEventListener('activate', function(event) {
    console.log('Service Worker aktivován');
    event.waitUntil(clients.claim());
});