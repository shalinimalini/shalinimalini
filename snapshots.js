// snapshots.js
const PercyScript = require('@percy/script');
// A script to navigate our app and take snapshots with Percy.
PercyScript.run(async (page, percySnapshot) => {
  await page.goto('http://localhost:8000');
  await percySnapshot('To Test Volvo home page');
// Enter a new to-do.
  await page.type('.new-todo', 'Volvo cars');
  await page.keyboard.press('Enter');
  await percySnapshot('To Test Volvo home page', { widths: [768, 992, 1200] });
});