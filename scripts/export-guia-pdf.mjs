import { chromium } from "playwright";
import { mkdir } from "node:fs/promises";
import path from "node:path";

const url = process.argv[2] || "http://127.0.0.1:8080/imprimir";
const out = process.argv[3] || "/workspace/public/guia-definitiva-cashflow.pdf";

await mkdir(path.dirname(out), { recursive: true });

const browser = await chromium.launch({ args: ["--no-sandbox", "--disable-dev-shm-usage"] });
const page = await browser.newPage({ viewport: { width: 1200, height: 1600 } });
await page.goto(url, { waitUntil: "networkidle", timeout: 120000 });
await page.evaluate(() => {
  document.querySelectorAll("details").forEach((d) => {
    d.open = true;
  });
});
await page.waitForTimeout(500);
await page.pdf({
  path: out,
  format: "A4",
  printBackground: true,
  displayHeaderFooter: true,
  headerTemplate: `<div style="font-size:9px;color:#7a7166;width:100%;padding:0 18mm;font-family:Georgia,serif;">Guía Definitiva CASHFLOW</div>`,
  footerTemplate: `<div style="font-size:9px;color:#7a7166;width:100%;padding:0 18mm;font-family:Georgia,serif;display:flex;justify-content:space-between;"><span>Manual de aprendizaje</span><span class="pageNumber"></span> / <span class="totalPages"></span></div>`,
  margin: { top: "18mm", bottom: "18mm", left: "14mm", right: "14mm" },
});
await browser.close();
console.log("wrote", out);
