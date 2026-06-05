import {test} from '@playwright/test';

test('first test', async ({page}) => {
  await page.goto('https://playwright.dev/');
  await page.screenshot({path: 'screenshot.png'});
});