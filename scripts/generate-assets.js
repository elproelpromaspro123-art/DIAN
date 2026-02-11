const { createCanvas, loadImage } = require("@napi-rs/canvas");
const { writeFileSync, mkdirSync } = require("fs");
const { join } = require("path");

const root = join(__dirname, "..");
const brandPath = join(root, "public", "brand", "logo.png");
const iconsDir = join(root, "public", "icons");
mkdirSync(iconsDir, { recursive: true });

function drawLogoSquare(size, padding = Math.round(size * 0.16)) {
  const canvas = createCanvas(size, size);
  const ctx = canvas.getContext("2d");
  ctx.clearRect(0, 0, size, size);
  return { canvas, ctx, padding };
}

async function generateIcons() {
  const logo = await loadImage(brandPath);

  const iconSpecs = [
    { name: "icon-512.png", size: 512, paddingRatio: 0.09 },
    { name: "icon-192.png", size: 192, paddingRatio: 0.09 },
    { name: "favicon.png", size: 256, paddingRatio: 0.08 },
    { name: "apple-icon.png", size: 180, paddingRatio: 0.1 },
    { name: "icon.png", size: 512, paddingRatio: 0.09 },
  ];

  for (const spec of iconSpecs) {
    const size = spec.size;
    const { canvas, ctx } = drawLogoSquare(size);
    const padding = Math.round(size * spec.paddingRatio);

    const available = size - padding * 2;
    const scale = Math.min(available / logo.width, available / logo.height);
    const w = logo.width * scale;
    const h = logo.height * scale;
    const x = (size - w) / 2;
    const y = (size - h) / 2;
    ctx.drawImage(logo, x, y, w, h);

    const buffer = canvas.toBuffer("image/png");
    const dest = spec.name.startsWith("icon-")
      ? join(iconsDir, spec.name)
      : join(root, "public", spec.name);
    writeFileSync(dest, buffer);
  }
}

function generateIco(pngPath, outPath) {
  const pngData = require("fs").readFileSync(pngPath);
  const pngSize = pngData.length;
  const header = Buffer.alloc(6);
  header.writeUInt16LE(0, 0); // reserved
  header.writeUInt16LE(1, 2); // type = icon
  header.writeUInt16LE(1, 4); // count

  const entry = Buffer.alloc(16);
  entry.writeUInt8(0, 0); // width 0 = 256
  entry.writeUInt8(0, 1); // height 0 = 256
  entry.writeUInt8(0, 2); // colors
  entry.writeUInt8(0, 3); // reserved
  entry.writeUInt16LE(1, 4); // planes
  entry.writeUInt16LE(32, 6); // bit count
  entry.writeUInt32LE(pngSize, 8); // bytes in resource
  entry.writeUInt32LE(6 + 16, 12); // offset

  const ico = Buffer.concat([header, entry, pngData]);
  writeFileSync(outPath, ico);
}

async function generateOg() {
  const WIDTH = 1200;
  const HEIGHT = 630;
  const canvas = createCanvas(WIDTH, HEIGHT);
  const ctx = canvas.getContext("2d");

  const gradient = ctx.createLinearGradient(0, 0, WIDTH, HEIGHT);
  gradient.addColorStop(0, "#0f2533");
  gradient.addColorStop(1, "#1f4b4e");
  ctx.fillStyle = gradient;
  ctx.fillRect(0, 0, WIDTH, HEIGHT);

  ctx.globalAlpha = 0.12;
  ctx.fillStyle = "#ffffff";
  ctx.beginPath();
  ctx.arc(120, 120, 220, 0, Math.PI * 2);
  ctx.fill();
  ctx.beginPath();
  ctx.arc(1080, 520, 300, 0, Math.PI * 2);
  ctx.fill();
  ctx.globalAlpha = 1;

  const logo = await loadImage(brandPath);
  const cardX = 80;
  const cardY = 140;
  const cardSize = 140;
  ctx.fillStyle = "rgba(255,255,255,0.15)";
  ctx.beginPath();
  ctx.roundRect(cardX, cardY, cardSize, cardSize, 28);
  ctx.fill();

  const padding = 24;
  const available = cardSize - padding * 2;
  const scale = Math.min(available / logo.width, available / logo.height);
  const w = logo.width * scale;
  const h = logo.height * scale;
  const x = cardX + (cardSize - w) / 2;
  const y = cardY + (cardSize - h) / 2;
  ctx.drawImage(logo, x, y, w, h);

  ctx.fillStyle = "#ffffff";
  ctx.font = "700 56px sans-serif";
  ctx.textAlign = "left";
  ctx.fillText("Prepárate DIAN", 260, 220);
  ctx.font = "500 32px sans-serif";
  ctx.fillStyle = "rgba(255,255,255,0.85)";
  ctx.fillText("Convocatoria 2676 · Ingreso", 260, 270);

  ctx.fillStyle = "#d9a441";
  ctx.fillRect(260, 300, 260, 4);

  ctx.fillStyle = "rgba(255,255,255,0.88)";
  ctx.font = "500 28px sans-serif";
  ctx.fillText("Rutas oficiales para Analista V y Gestor I", 260, 360);
  ctx.fillText("Simulacros + estudio guiado + recursos verificados", 260, 400);

  ctx.fillStyle = "rgba(255,255,255,0.6)";
  ctx.font = "500 20px sans-serif";
  ctx.fillText("Actualizado febrero 2026", 260, 460);

  const buffer = canvas.toBuffer("image/png");
  writeFileSync(join(root, "public", "og.png"), buffer);
}

(async () => {
  await generateIcons();
  generateIco(join(root, "public", "favicon.png"), join(root, "public", "favicon.ico"));
  await generateOg();
  console.log("Assets generated successfully.");
})();
