import { test } from '@playwright/test';

test.describe('Quill Editor', () => {
  test('it should check all stories load', async ({ page }) => {
    await page.goto('https://vennersys.github.io/html-editors/?path=/docs/components-htmleditors-quilleditor--docs');
    await page.getByRole('link', { name: 'Primary' }).click();
    await page.locator('iframe[title="storybook-preview-iframe"]').contentFrame().getByRole('paragraph').click();
    await page.locator('iframe[title="storybook-preview-iframe"]').contentFrame().locator('.ql-editor').fill('123');
    await page.getByRole('link', { name: 'With Data' }).click();
    await page.getByRole('link', { name: 'List Items' }).click();
    await page.locator('iframe[title="storybook-preview-iframe"]').contentFrame().locator('.ql-editor').fill('\n\n\nList Item 1\n');
    await page.locator('iframe[title="storybook-preview-iframe"]').contentFrame().getByText('List Item').click();
    await page.getByRole('link', { name: 'Bold Text' }).click();
    await page.locator('iframe[title="storybook-preview-iframe"]').contentFrame().locator('.ql-editor').fill('Bold Text');
    await page.locator('iframe[title="storybook-preview-iframe"]').contentFrame().getByText('Bold Text').click();
    await page.getByRole('link', { name: 'Italic Text' }).click({
      button: 'right'
    });
    await page.getByRole('link', { name: 'Italic Text' }).click();
    await page.locator('iframe[title="storybook-preview-iframe"]').contentFrame().locator('.ql-editor').fill('Italic Text');
    await page.locator('iframe[title="storybook-preview-iframe"]').contentFrame().locator('div').filter({ hasText: 'Italic Text' }).nth(3).click();
    await page.getByRole('link', { name: 'Underline Text' }).click();
    await page.locator('iframe[title="storybook-preview-iframe"]').contentFrame().locator('.ql-editor').fill('Underlined Text');
    await page.locator('iframe[title="storybook-preview-iframe"]').contentFrame().getByText('Underlined Text').click();
    await page.getByRole('link', { name: 'Header Text' }).click();
    await page.locator('iframe[title="storybook-preview-iframe"]').contentFrame().locator('.ql-editor').fill('\n\n\nHeader Text');
    await page.locator('iframe[title="storybook-preview-iframe"]').contentFrame().getByRole('heading', { name: 'Header Text' }).click();
   });
});

