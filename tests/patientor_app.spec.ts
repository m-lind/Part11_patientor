import { test, expect } from '@playwright/test';

test('Patientor has title', async ({ page }) => {
    await page.goto('http://localhost:5173');  
    const locator = page.getByText('Patientor');
    await expect(locator).toBeVisible();
});

test('A form can be filled', async ({ page }) => {
    await page.goto('http://localhost:5173');
    await page.getByRole('button', { name: 'Add new patient' }).click();
    const randomIndex = Math.floor(Math.random() * 10000);
    await page.getByTestId('name').fill(`Test Name ${randomIndex}`);
    await page.getByTestId('ssn').fill('121212-1234');
    await page.getByTestId('date-of-birth').fill('2012-12-12');
    await page.getByTestId('occupation').fill('Tester');
    await page.getByRole('button', { name: 'Add' }).click();
    await expect(page.getByText(`Test Name ${randomIndex}`)).toBeVisible();
});
