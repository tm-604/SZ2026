// Bump this whenever index.html (or the lineup data inside it) changes,
// so returning visitors pick up the new version instead of a stale cache.
const CACHE_NAME = 'sizigia2026-cache-v124';

// Must succeed, or the app shell itself is broken — small, low-risk set,
// kept atomic exactly like the old single-array cache.addAll() was.
const ASSETS_CRITICAL = [
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
  './icon-512-maskable-light.png'
];

// Best-effort — nice to have offline, never worth failing install over.
// One failed photo/map image should never cost the rest. Auto-regenerated
// by push_photos.js's syncForkSwAssets() whenever a photo is added/changed.
const ASSETS_PHOTOS = [
  './map-detail.jpg',
  './map-legend.jpg',
  './map-overview.jpg',
  './photos/1200mic.jpg',
  './photos/3lmt.jpg',
  './photos/aaron-king.jpg',
  './photos/ace-ventura.jpg',
  './photos/ametrina.jpg',
  './photos/amplify-f2f-hypnoise.jpg',
  './photos/anny.jpg',
  './photos/anoebis.jpg',
  './photos/arjuna.jpg',
  './photos/art-of-trance.jpg',
  './photos/astrix.jpg',
  './photos/atbloom.jpg',
  './photos/atmos.jpg',
  './photos/avalon.jpg',
  './photos/axon.jpg',
  './photos/aynix-x.jpg',
  './photos/azaleh.jpg',
  './photos/banel.jpg',
  './photos/bayawaka.jpg',
  './photos/beyond-b2b-danger.jpg',
  './photos/bioterranean.jpg',
  './photos/bitz-pliz.jpg',
  './photos/boundless.jpg',
  './photos/bumbling-loons.jpg',
  './photos/captain-pastek.jpg',
  './photos/celli.jpg',
  './photos/cesar-mimesis.jpg',
  './photos/chaac.jpg',
  './photos/cioz.jpg',
  './photos/consorzio-ochirossi.jpg',
  './photos/cronocops.jpg',
  './photos/daksinamurti.jpg',
  './photos/darwin.jpg',
  './photos/dekel.jpg',
  './photos/dela-moon.jpg',
  './photos/desert-dwellers.jpg',
  './photos/dickster.jpg',
  './photos/digital-hippie.jpg',
  './photos/djantrix.jpg',
  './photos/e-clip.jpg',
  './photos/eitan-reiter-gorovich.jpg',
  './photos/eitan-reiter.jpg',
  './photos/emiri.jpg',
  './photos/emok-f2f-phaxe.jpg',
  './photos/emok.jpg',
  './photos/etnica-pleiadians.jpg',
  './photos/evil-oil-man.jpg',
  './photos/extrawelt.jpg',
  './photos/fabian-krooss.jpg',
  './photos/farebi-jalebi.jpg',
  './photos/fernanda-pistelli.jpg',
  './photos/filteria.jpg',
  './photos/flave.jpg',
  './photos/freedom-fighters.jpg',
  './photos/frida-darko-b2b-atric.jpg',
  './photos/fungus-funk.jpg',
  './photos/giuseppe-f2f-farebi-jalebi.jpg',
  './photos/giuseppe.jpg',
  './photos/gms.jpg',
  './photos/goa-jonas.jpg',
  './photos/golanski.jpg',
  './photos/gorovich.jpg',
  './photos/green-nuns-of-the-revolution-by-dick-trevor.jpg',
  './photos/griffin-kloud.jpg',
  './photos/hellquist.jpg',
  './photos/hypnoxock.jpg',
  './photos/i-m-d.jpg',
  './photos/iamai.jpg',
  './photos/imago.jpg',
  './photos/ingrained-instincts.jpg',
  './photos/insane-creatures.jpg',
  './photos/ivana.jpg',
  './photos/james-monro.jpg',
  './photos/jedidiah.jpg',
  './photos/jorke.jpg',
  './photos/josko.jpg',
  './photos/jossie-telch.jpg',
  './photos/kalya-scintilla.jpg',
  './photos/kasey-taylor.jpg',
  './photos/khromata.jpg',
  './photos/killerwatts.jpg',
  './photos/kino-doscun.jpg',
  './photos/kokmok.jpg',
  './photos/kozy.jpg',
  './photos/kromagon.jpg',
  './photos/krumelur.jpg',
  './photos/kulle-f2f-psygroo.jpg',
  './photos/l-xir.jpg',
  './photos/lara-s.jpg',
  './photos/liquid-soul-f2f-ace-ventura.jpg',
  './photos/liquid-soul.jpg',
  './photos/lo-renzo.jpg',
  './photos/lorikeet.jpg',
  './photos/lunatica.jpg',
  './photos/maiky.jpg',
  './photos/matildoutz.jpg',
  './photos/menog.jpg',
  './photos/mental.jpg',
  './photos/merkaba.jpg',
  './photos/miles-from-mars.jpg',
  './photos/mngrm.jpg',
  './photos/nanoplex.jpg',
  './photos/ne-yam.jpg',
  './photos/ness.jpg',
  './photos/nixe.jpg',
  './photos/nueq.jpg',
  './photos/okapi.jpg',
  './photos/oliver-koletzki.jpg',
  './photos/one-million-toys.jpg',
  './photos/orgnz.jpg',
  './photos/ori.jpg',
  './photos/originz-rajax.jpg',
  './photos/out-of-orbit.jpg',
  './photos/phaxe.jpg',
  './photos/prana.jpg',
  './photos/psygroo.jpg',
  './photos/psynonima.jpg',
  './photos/pulli.jpg',
  './photos/r3nata.jpg',
  './photos/rafael-aragon.jpg',
  './photos/raxon.jpg',
  './photos/regan-f2f-dickster.jpg',
  './photos/regan.jpg',
  './photos/render.jpg',
  './photos/rising-dust.jpg',
  './photos/ritmo.jpg',
  './photos/sahra-bass.jpg',
  './photos/sator-arepo.jpg',
  './photos/shove.jpg',
  './photos/sleek.jpg',
  './photos/smkng-chkrs.jpg',
  './photos/something-blue.jpg',
  './photos/sorry-4-tomorrow.jpg',
  './photos/starlab.jpg',
  './photos/sulfur.jpg',
  './photos/sumiruna.jpg',
  './photos/swarup.jpg',
  './photos/tao-andra.jpg',
  './photos/technocalor.jpg',
  './photos/tikal.jpg',
  './photos/tribone.jpg',
  './photos/triforce.jpg',
  './photos/tristan.jpg',
  './photos/tsuyoshi-suzuki.jpg',
  './photos/union-jack.jpg',
  './photos/urem.jpg',
  './photos/vallou.jpg',
  './photos/vegan-cake.jpg',
  './photos/victor-ruiz.jpg',
  './photos/wa-jima-tapes.jpg',
  './photos/yusuf-lemone.jpg'
];

// Runs cache.add() per URL independently via Promise.allSettled() so one
// bad fetch can't take the rest of the batch down with it (unlike
// cache.addAll(), which is atomic — any single rejection discards
// everything, even assets that already downloaded successfully). Logs
// failures via console.warn for debugging; no retry/backoff here — the
// fetch handler below already backfills any miss the next time it's
// requested on a real network.
function cacheBestEffort(cache, urls) {
  return Promise.allSettled(urls.map((url) => cache.add(url))).then((results) => {
    const failed = results
      .map((r, i) => (r.status === 'rejected' ? urls[i] : null))
      .filter(Boolean);
    if (failed.length) {
      console.warn(`[sw] ${failed.length}/${urls.length} best-effort assets failed to precache:`, failed);
    }
  });
}

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS_CRITICAL))
  );
  self.skipWaiting();
});

// Best-effort photo/map caching happens here, not chained inside install,
// so the app shell activates almost immediately after a version bump
// instead of blocking on hundreds of media fetches first. Still fully
// protected against early SW termination since it stays inside this
// event's own waitUntil().
self.addEventListener('activate', (event) => {
  event.waitUntil(
    Promise.all([
      caches.keys().then((keys) =>
        Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k)))
      ),
      caches.open(CACHE_NAME).then((cache) => cacheBestEffort(cache, ASSETS_PHOTOS)),
    ])
  );
  self.clients.claim();
});

// Cache-first for our own files (instant offline load), falling back to the
// network for anything else (e.g. the Google Fonts stylesheet), and finally
// to whatever's cached if the network is unavailable.
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  // Calendar-reminder handoff for installed iOS PWAs: data: URI navigation
  // is silently ignored in standalone display-mode, so index.html routes
  // through this instead — a real same-origin response with a proper
  // text/calendar Content-Type, which iOS reliably hands off to Calendar
  // even without the full Safari chrome around it.
  const url = new URL(event.request.url);
  if (url.pathname.endsWith('/reminder.ics')) {
    const ics = decodeURIComponent(url.searchParams.get('data') || '');
    event.respondWith(new Response(ics, {
      headers: {
        'Content-Type': 'text/calendar; charset=utf-8',
        'Content-Disposition': 'inline; filename="event.ics"'
      }
    }));
    return;
  }
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
