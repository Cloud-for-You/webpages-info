// Service Worker pro zachycení všech požadavků a přesměrování na cílovou doménu
const targetUrl = 'https://www.cfy.cz';

self.addEventListener('fetch', function(event) {
    // Zachycení všech požadavků (GET, POST, atd.)
    event.respondWith(
        fetch(event.request).catch(function() {
            // Pokud požadavek selže, přesměrujeme na cílovou URL
            return Response.redirect(targetUrl, 301);
        })
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