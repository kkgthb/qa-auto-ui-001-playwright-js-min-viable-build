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
