// @ts-check
import { test, expect } from '@playwright/test';

test('Открытие главной страницы Voxys', async ({ page }) => {
  await page.goto('https://www.voxys.ru/', {
      waitUntil: 'domcontentloaded', // Ждем только загрузки DOM
      timeout: 60000 // Увеличиваем таймаут до 60 секунд
    });
  await expect(page).toHaveURL('https://www.voxys.ru/');
  await expect(page).toHaveTitle(/Колл-центр в Москве | Воксис/);
  await expect(page.locator('body')).toBeVisible();
});

test('Открытие страницы продуктов Voxys', async ({ page }) => {
  await page.goto('https://www.voxys.ru/cifrovye-reshenija.html', {
      waitUntil: 'domcontentloaded', // Ждем только загрузки DOM
      timeout: 60000 // Увеличиваем таймаут до 60 секунд
    });
  await expect(page).toHaveURL('https://www.voxys.ru/cifrovye-reshenija.html');
  await expect(page).toHaveTitle(/Цифровые продукты/);
  await expect(page.locator('body')).toBeVisible();
});

test('Открытие страницы карьеры Voxys', async ({ page }) => {
  await page.goto('https://www.voxys.ru/vacancy.html', {
      waitUntil: 'domcontentloaded', // Ждем только загрузки DOM
      timeout: 60000 // Увеличиваем таймаут до 60 секунд
    });
  await expect(page).toHaveURL('https://www.voxys.ru/vacancy.html');
  await expect(page).toHaveTitle(/Карьера | Воксис/);
  await expect(page.locator('body')).toBeVisible();
});

test('Открытие страницы новостей Voxys', async ({ page }) => {
  await page.goto('https://www.voxys.ru/news.html', {
      waitUntil: 'domcontentloaded', // Ждем только загрузки DOM
      timeout: 60000 // Увеличиваем таймаут до 60 секунд
    });
  await expect(page).toHaveURL('https://www.voxys.ru/news.html');
  await expect(page).toHaveTitle(/Новости компании Voxys/);
  await expect(page.locator('body')).toBeVisible();
});

test('Открытие страницы услуг колл-центра Voxys', async ({ page }) => {
  await page.goto('https://www.voxys.ru/uslugi.html', {
      waitUntil: 'domcontentloaded', // Ждем только загрузки DOM
      timeout: 60000 // Увеличиваем таймаут до 60 секунд
    });
  await expect(page).toHaveURL('https://www.voxys.ru/uslugi.html');
  await expect(page).toHaveTitle(/Услуги колл-центра в Москве, цены на услуги контакт-центра Voxys/);
  await expect(page.locator('body')).toBeVisible();
});