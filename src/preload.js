import images from "virtual:asset-images";

const HERO = "/assets/hero.webp";
const MAX_SPLASH_MS = 4000;
const PREFETCH_CONCURRENCY = 3;

function loadImage(src) {
  return new Promise((resolve) => {
    const img = new Image();
    img.onload = img.onerror = () => resolve();
    img.src = src;
  });
}

function prefetchImages() {
  if (navigator.connection?.saveData) return;
  const isEvent = (src) => src.includes("/events/");
  const queue = images
    .filter((src) => src !== HERO)
    .sort((a, b) => isEvent(a) - isEvent(b) || b.localeCompare(a));
  const next = () => {
    const src = queue.shift();
    if (src) loadImage(src).then(next);
  };
  for (let i = 0; i < PREFETCH_CONCURRENCY; i++) next();
}

export function hideSplashWhenReady() {
  const splash = document.getElementById("splash");
  const ready = Promise.all([loadImage(HERO), document.fonts.ready]);
  const timeout = new Promise((resolve) => setTimeout(resolve, MAX_SPLASH_MS));

  Promise.race([ready, timeout]).then(() => {
    splash?.classList.add("done");
    setTimeout(() => splash?.remove(), 400);
    prefetchImages();
  });
}
