// Interesting -- I had forgotten to put this file into the proper folder and also 
// had made a typo in it, meaning it definitely was out of commission, 
// and Playwright still ran "./my-e2e/tests/my-first-tests.spec.js" just fine.
// It seems that having a "playwright.config.js" file is entirely optional 
// and the "npx playwright test" is smart enough to scan subfolders for files 
// ending in ".spec.js" without a hint as seen below.

const { defineConfig, devices } = require("@playwright/test");

module.exports = defineConfig({
  testDir: "./my-e2e-tests",
  fullyParallel: true,
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] },
    },
  ],
});
