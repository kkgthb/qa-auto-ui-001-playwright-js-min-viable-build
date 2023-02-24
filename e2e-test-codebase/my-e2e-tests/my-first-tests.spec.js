const { test, expect } = require("@playwright/test");

test("Has correct phrase in title", async ({ page }) => {
  await page.goto(process.env.URL_TO_VISIT);
  await expect(page).toHaveTitle(/^.*Katie Kodes.*$/);
});
