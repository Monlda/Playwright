// This file contains tests that demonstrate the use of hooks in Playwright.
// Hooks are used to run some code before or after each test, or before or after all tests in a file. 
// They are useful for setting up the test environment, such as navigating to a specific page, logging in, or cleaning up after tests.

import {test} from '@playwright/test'


test.beforeEach(async ({page}) => {
    await page.goto('http://localhost:4200/');
    await page.getByText('Forms').click();

});

test('Form Layouts test', async ({page}) => {
    await page.getByText('Form Layouts').click();
})

test('Datepicker test', async ({page}) => {
    await page.getByText('Datepicker').click();
})