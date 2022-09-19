const fs = require("fs");
const lighthouse = require("lighthouse");
const chromeLauncher = require("chrome-launcher");

var urlsToBeRead = ["https://www.w3schools.com/", "https://www.vg.no/"];

let result = [];

(async () => {
  const chrome = await chromeLauncher.launch({ chromeFlags: ["--headless"] });

  const options = {
    logLevel: "info",
    output: "csv",
    onlyCategories: ["performance", "accessibility", "best-practices", "seo"],
    audits: [
      "first-meaningful-paint",
      "first-cpu-idle",
      "byte-efficiency/uses-optimized-images",
    ],
    port: chrome.port,
    strategy: "desktop",
  };

  for (i in urlsToBeRead) {
    const runnerResult = await lighthouse(urlsToBeRead[i], options);

    result.push({
      URL: runnerResult.lhr.finalUrl,
      performance: runnerResult.lhr.categories.performance.score * 100,
      accessibility: runnerResult.lhr.categories.accessibility.score * 100,
      bestPractises: runnerResult.lhr.categories["best-practices"].score * 100,
      seoScore: runnerResult.lhr.categories.seo.score * 100,
    });
  }

  fs.appendFileSync("lhreport.json", JSON.stringify(result));
  await chrome.kill();
})();
