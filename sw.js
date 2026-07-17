// Bump this whenever index.html (or the lineup data inside it) changes,
// so returning visitors pick up the new version instead of a stale cache.
const CACHE_NAME = 'sizigia2026-cache-v68';
// Core assets only — photos will be added as they're discovered/added.
const ASSETS = [
  './',
  './index.html',
  './jsqr.js',
  './qrcode.js',
  './manifest.json',
  './icon-192.png',
  './icon-192-light.png',
  './icon-512.png',
  './icon-512-light.png',
  './icon-512-maskable.png',
  './icon-180.png',
  './icon-180-light.png',
  './icon-512-maskable-light.png',
  './map-detail.jpg',
  './map-overview.jpg',
  './map-legend.jpg',
  './photos/3lmt.jpg',
  './photos/ace-ventura.jpg',
  './photos/anoebis.jpg',
  './photos/arjuna.jpg',
  './photos/art-of-trance.jpg',
  './photos/astrix.jpg',
  './photos/atbloom.jpg',
  './photos/aynix-x.jpg',
  './photos/azaleh.jpg',
  './photos/bayawaka.jpg',
  './photos/bioterranean.jpg',
  './photos/captain-pastek.jpg',
  './photos/cesar-mimesis.jpg',
  './photos/cioz.jpg',
  './photos/cronocops.jpg',
  './photos/daksinamurti.jpg',
  './photos/dekel.jpg',
  './photos/dela-moon.jpg',
  './photos/desert-dwellers.jpg',
  './photos/dickster.jpg',
  './photos/digital-hippie.jpg',
  './photos/djantrix.jpg',
  './photos/e-clip.jpg',
  './photos/eitan-reiter.jpg',
  './photos/emiri.jpg',
  './photos/extrawelt.jpg',
  './photos/fabian-krooss.jpg',
  './photos/farebi-jalebi.jpg',
  './photos/fernanda-pistelli.jpg',
  './photos/filteria.jpg',
  './photos/fungus-funk.jpg',
  './photos/gms.jpg',
  './photos/golanski.jpg',
  './photos/gorovich.jpg',
  './photos/griffin-kloud.jpg',
  './photos/hellquist.jpg',
  './photos/hypnoxock.jpg',
  './photos/ingrained-instincts.jpg',
  './photos/insane-creatures.jpg',
  './photos/james-monro.jpg',
  './photos/jossie-telch.jpg',
  './photos/kalya-scintilla.jpg',
  './photos/kasey-taylor.jpg',
  './photos/khromata.jpg',
  './photos/killerwatts.jpg',
  './photos/kino-doscun.jpg',
  './photos/kokmok.jpg',
  './photos/kromagon.jpg',
  './photos/krumelur.jpg',
  './photos/l-xir.jpg',
  './photos/lara-s.jpg',
  './photos/liquid-soul.jpg',
  './photos/lo-renzo.jpg',
  './photos/lorikeet.jpg',
  './photos/matildoutz.jpg',
  './photos/menog.jpg',
  './photos/miles-from-mars.jpg',
  './photos/nanoplex.jpg',
  './photos/ne-yam.jpg',
  './photos/ness.jpg',
  './photos/oliver-koletzki.jpg',
  './photos/one-million-toys.jpg',
  './photos/phaxe.jpg',
  './photos/psygroo.jpg',
  './photos/psynonima.jpg',
  './photos/r3nata.jpg',
  './photos/rafael-aragon.jpg',
  './photos/raxon.jpg',
  './photos/regan.jpg',
  './photos/render.jpg',
  './photos/rising-dust.jpg',
  './photos/sahra-bass.jpg',
  './photos/sator-arepo.jpg',
  './photos/starlab.jpg',
  './photos/sumiruna.jpg',
  './photos/tao-andra.jpg',
  './photos/tribone.jpg',
  './photos/tristan.jpg',
  './photos/tsuyoshi-suzuki.jpg',
  './photos/urem.jpg',
  './photos/vallou.jpg',
  './photos/vegan-cake.jpg',
  './photos/victor-ruiz.jpg',
  './photos/yusuf-lemone.jpg'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
    )
  );
  self.clients.claim();
});

// Cache-first for our own files (instant offline load), falling back to the
// network for anything else (e.g. the Google Fonts stylesheet), and finally
// to whatever's cached if the network is unavailable.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  event.respondWith(
    caches.match(event.request).then((cached) => {
      if (cached) return cached;
      return fetch(event.request)
        .then((resp) => {
          if (resp && resp.ok && event.request.url.startsWith(self.location.origin)) {
            const clone = resp.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, clone));
          }
          return resp;
        })
        .catch(() => cached);
    })
  );
});
