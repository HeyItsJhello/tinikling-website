import { readdir, readFile, writeFile, rename, mkdir, stat } from "node:fs/promises";
import { existsSync } from "node:fs";
import { join, relative, extname, dirname } from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const ROOT = fileURLToPath(new URL("..", import.meta.url));
const ASSETS = join(ROOT, "public/assets");
const ORIGINALS = join(ROOT, "original-images");
const CODE_DIRS = [join(ROOT, "src")];
const CODE_FILES = [join(ROOT, "index.html")];
const MAX_SIZE = 1920;
const QUALITY = 80;

async function walk(dir) {
  const out = [];
  for (const entry of await readdir(dir, { withFileTypes: true })) {
    const path = join(dir, entry.name);
    if (entry.isDirectory()) out.push(...(await walk(path)));
    else out.push(path);
  }
  return out;
}

async function keepOriginal(file) {
  const ext = extname(file);
  let dest = join(ORIGINALS, relative(ASSETS, file));
  for (let n = 2; existsSync(dest); n++) {
    dest = join(ORIGINALS, relative(ASSETS, file)).slice(0, -ext.length) + `-${n}${ext}`;
  }
  await mkdir(dirname(dest), { recursive: true });
  await rename(file, dest);
}

const images = (await walk(ASSETS)).filter((f) =>
  [".png", ".jpg", ".jpeg"].includes(extname(f).toLowerCase()),
);

if (images.length === 0) {
  console.log("optimize-images: nothing to convert");
  process.exit(0);
}

const renames = [];
let before = 0;
let after = 0;

for (const file of images) {
  const target = file.slice(0, -extname(file).length) + ".webp";
  await sharp(file)
    .rotate()
    .resize(MAX_SIZE, MAX_SIZE, { fit: "inside", withoutEnlargement: true })
    .webp({ quality: QUALITY })
    .toFile(target);
  before += (await stat(file)).size;
  after += (await stat(target)).size;
  await keepOriginal(file);
  renames.push([relative(join(ROOT, "public"), file), relative(join(ROOT, "public"), target)]);
}

const codeFiles = [
  ...CODE_FILES,
  ...(await Promise.all(CODE_DIRS.map(walk))).flat(),
].filter((f) => /\.(jsx?|css|html)$/.test(f));

for (const file of codeFiles) {
  const original = await readFile(file, "utf8");
  let text = original;
  for (const [from, to] of renames) text = text.split(from).join(to);
  if (text !== original) await writeFile(file, text);
}

const mb = (n) => (n / 1024 / 1024).toFixed(1) + " MB";
console.log(
  `optimize-images: converted ${images.length} images to WebP (${mb(before)} → ${mb(after)})`,
);
