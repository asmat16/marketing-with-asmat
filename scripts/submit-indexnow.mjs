#!/usr/bin/env node
/**
 * Submit every sitemap URL to IndexNow (Bing, Yandex, Seznam, Naver).
 * Google still needs Search Console URL Inspection for the first crawl.
 */
const KEY = "07bf226b4e67b76ddef257a58f370109";
const HOST = "www.marketingwithasmat.pro";

async function main() {
  const sitemap = await fetch(`https://${HOST}/sitemap.xml`).then((r) => r.text());
  const urls = [...sitemap.matchAll(/<loc>([^<]+)<\/loc>/g)].map((m) => m[1]);
  if (!urls.length) {
    throw new Error("No URLs found in sitemap");
  }

  const body = {
    host: HOST,
    key: KEY,
    keyLocation: `https://${HOST}/${KEY}.txt`,
    urlList: urls,
  };

  const res = await fetch("https://api.indexnow.org/indexnow", {
    method: "POST",
    headers: { "content-type": "application/json; charset=utf-8" },
    body: JSON.stringify(body),
  });

  console.log(`IndexNow ${res.status} ${res.statusText} · ${urls.length} URLs`);
  if (!res.ok) {
    console.log(await res.text());
    process.exit(1);
  }
}

main();
