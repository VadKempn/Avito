import { test, expect } from '@playwright/test';

test('пустая форма входа показывает ошибки Email и пароля', async ({ page }) => {
  await page.goto('/');

  const openLogin = page.locator('[data-marker="login-button-desktop"]');
  await expect(openLogin).toHaveCount(1);
  await openLogin.click();

  const form = page.locator('[data-marker="login-form"]');
  const submitLogin = form.locator('[data-marker="login-submit-button"]');
  await expect(submitLogin).toHaveCount(1);
  await submitLogin.click();

  const emailError = form.locator('[data-marker="email-error"]');
  const passwordError = form.locator('[data-marker="password-error"]');

  await expect(emailError).toHaveCount(1);
  await expect(emailError).toBeVisible();
  await expect(emailError).toHaveText('Email обязателен');

  await expect(passwordError).toHaveCount(1);
  await expect(passwordError).toBeVisible();
  await expect(passwordError).toHaveText('Пароль обязателен');
});
